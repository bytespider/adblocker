/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import StaticDataView from './data-view';

interface IResource {
  contentType: string;
  data: string;
}

// TODO - support # alias
// TODO - support empty resource body

/**
 * Abstraction on top of resources.txt used for redirections as well as script
 * injections. It contains logic to parse, serialize and get resources by name
 * for use in the engine.
 */
export default class Resources {
  public static deserialize(buffer: StaticDataView): Resources {
    const checksum = buffer.getASCII();

    // Deserialize `resources`
    const resources: Map<string, IResource> = new Map();
    const numberOfResources = buffer.getUint16();
    for (let i = 0; i < numberOfResources; i += 1) {
      resources.set(buffer.getASCII(), {
        contentType: buffer.getASCII(),
        data: buffer.getASCII(),
      });
    }

    // Deserialize `js`
    const js: Map<string, string> = new Map();
    resources.forEach(({ contentType, data }, name) => {
      if (contentType === 'application/javascript') {
        js.set(name, data);
      }
    });

    return new Resources({
      checksum,
      js,
      resources,
    });
  }

  public static parse(data: string, { checksum }: { checksum: string }): Resources {
    const typeToResource: Map<string, Map<string, string>> = new Map();
    const trimComments = (str: string) => str.replace(/^\s*#.*$/gm, '');
    const chunks = data.split('\n\n');

    for (let i = 0; i < chunks.length; i += 1) {
      const resource = trimComments(chunks[i]).trim();
      if (resource.length !== 0) {
        const firstNewLine = resource.indexOf('\n');
        const split = resource.slice(0, firstNewLine).split(/\s+/);
        const name = split[0];
        const type = split[1];
        const body = resource.slice(firstNewLine + 1);

        if (name === undefined || type === undefined || body === undefined) {
          continue;
        }

        let resources = typeToResource.get(type);
        if (resources === undefined) {
          resources = new Map();
          typeToResource.set(type, resources);
        }
        resources.set(name, body);
      }
    }

    // The resource containing javascirpts to be injected
    const js: Map<string, string> = typeToResource.get('application/javascript') || new Map();
    const entries = Array.from(js.entries());
    for (let i = 0; i < entries.length; i += 1) {
      const key = entries[i][0];
      const value = entries[i][1];
      if (key.endsWith('.js')) {
        js.set(key.slice(0, -3), value);
      }
    }

    // Create a mapping from resource name to { contentType, data }
    // used for request redirection.
    const resourcesByName: Map<string, IResource> = new Map();
    typeToResource.forEach((resources, contentType) => {
      resources.forEach((resource: string, name: string) => {
        resourcesByName.set(name, {
          contentType,
          data: resource,
        });
      });
    });

    return new Resources({
      checksum,
      js,
      resources: resourcesByName,
    });
  }

  public readonly checksum: string;
  public readonly js: Map<string, string>;
  public readonly resources: Map<string, IResource>;

  constructor({ checksum = '', js = new Map(), resources = new Map() }: Partial<Resources> = {}) {
    this.checksum = checksum;
    this.js = js;
    this.resources = resources;
  }

  public getResource(name: string): IResource | undefined {
    return this.resources.get(name);
  }

  public getSerializedSize(): number {
    let estimatedSize = (
      StaticDataView.sizeOfASCII(this.checksum) +
      (2 * StaticDataView.sizeOfByte()) // resources.size
    );

    this.resources.forEach(({ contentType, data }, name) => {
      estimatedSize += (
        StaticDataView.sizeOfASCII(name) +
        StaticDataView.sizeOfASCII(contentType) +
        StaticDataView.sizeOfASCII(data)
      );
    });

    return estimatedSize;
  }

  public serialize(buffer: StaticDataView): void {
    // Serialize `checksum`
    buffer.pushASCII(this.checksum);

    // Serialize `resources`
    buffer.pushUint16(this.resources.size);
    this.resources.forEach(({ contentType, data }, name) => {
      buffer.pushASCII(name);
      buffer.pushASCII(contentType);
      buffer.pushASCII(data);
    });
  }
}
