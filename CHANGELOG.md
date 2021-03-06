# v1.17.0 (Sun Jul 12 2020)

### Release Notes

_From #1080_

Add support for two new features to make network filtering more flexible and powerful. The new [`denyallow` option](https://github.com/uBlockOrigin/uBlock-issues/wiki/Static-filter-syntax#denyallow) is now fully supported. Moreover, both the new `denyallow` and existing `domain` options can contain [entities](https://github.com/uBlockOrigin/uBlock-issues/wiki/Static-filter-syntax#entity), allowing the use of trailing wildcards to match against all public suffixes (e.g. `evil.*` will match `evil` followed by any valid public suffix like `evil.com` or `evil.co.uk`).

---

#### :rocket: New Feature

- `@cliqz/adblocker`
  - feat: support denyallow option and entities for network filters [#1080](https://github.com/cliqz-oss/adblocker/pull/1080) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#1076](https://github.com/cliqz-oss/adblocker/pull/1076) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1075](https://github.com/cliqz-oss/adblocker/pull/1075) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1071](https://github.com/cliqz-oss/adblocker/pull/1071) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1070](https://github.com/cliqz-oss/adblocker/pull/1070) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump auto from 9.43.2 to 9.44.0 [#1078](https://github.com/cliqz-oss/adblocker/pull/1078) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.43.1 to 9.43.2 [#1077](https://github.com/cliqz-oss/adblocker/pull/1077) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump jsdom from 16.2.2 to 16.3.0 [#1072](https://github.com/cliqz-oss/adblocker/pull/1072) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-playwright`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump @types/mocha from 7.0.2 to 8.0.0 [#1079](https://github.com/cliqz-oss/adblocker/pull/1079) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`
  - build(deps-dev): bump @types/jsdom from 12.2.4 to 16.2.3 [#885](https://github.com/cliqz-oss/adblocker/pull/885) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker`
  - build(deps): bump @types/firefox-webext-browser from 70.0.1 to 78.0.0 [#1026](https://github.com/cliqz-oss/adblocker/pull/1026) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.119 to 0.0.120 [#1074](https://github.com/cliqz-oss/adblocker/pull/1074) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.16.1 (Wed Jul 08 2020)

#### :bug: Bug Fix

- `@cliqz/adblocker-puppeteer`
  - Fix puppeteer package with correct promises handling. [#1067](https://github.com/cliqz-oss/adblocker/pull/1067) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#1061](https://github.com/cliqz-oss/adblocker/pull/1061) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1053](https://github.com/cliqz-oss/adblocker/pull/1053) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1051](https://github.com/cliqz-oss/adblocker/pull/1051) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1049](https://github.com/cliqz-oss/adblocker/pull/1049) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1048](https://github.com/cliqz-oss/adblocker/pull/1048) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1046](https://github.com/cliqz-oss/adblocker/pull/1046) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1042](https://github.com/cliqz-oss/adblocker/pull/1042) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1040](https://github.com/cliqz-oss/adblocker/pull/1040) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1039](https://github.com/cliqz-oss/adblocker/pull/1039) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1038](https://github.com/cliqz-oss/adblocker/pull/1038) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1034](https://github.com/cliqz-oss/adblocker/pull/1034) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1030](https://github.com/cliqz-oss/adblocker/pull/1030) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1023](https://github.com/cliqz-oss/adblocker/pull/1023) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1020](https://github.com/cliqz-oss/adblocker/pull/1020) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1018](https://github.com/cliqz-oss/adblocker/pull/1018) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1015](https://github.com/cliqz-oss/adblocker/pull/1015) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1014](https://github.com/cliqz-oss/adblocker/pull/1014) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1013](https://github.com/cliqz-oss/adblocker/pull/1013) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1010](https://github.com/cliqz-oss/adblocker/pull/1010) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1007](https://github.com/cliqz-oss/adblocker/pull/1007) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1005](https://github.com/cliqz-oss/adblocker/pull/1005) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#1002](https://github.com/cliqz-oss/adblocker/pull/1002) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#993](https://github.com/cliqz-oss/adblocker/pull/993) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#992](https://github.com/cliqz-oss/adblocker/pull/992) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#990](https://github.com/cliqz-oss/adblocker/pull/990) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#988](https://github.com/cliqz-oss/adblocker/pull/988) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#985](https://github.com/cliqz-oss/adblocker/pull/985) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump auto from 9.43.0 to 9.43.1 [#1068](https://github.com/cliqz-oss/adblocker/pull/1068) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.41.1 to 9.43.0 [#1066](https://github.com/cliqz-oss/adblocker/pull/1066) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.3.4 to 8.4.0 [#1065](https://github.com/cliqz-oss/adblocker/pull/1065) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.20.0 to 2.21.0 [#1064](https://github.com/cliqz-oss/adblocker/pull/1064) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump playwright from 1.1.1 to 1.2.0 [#1059](https://github.com/cliqz-oss/adblocker/pull/1059) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/chai-as-promised from 7.1.2 to 7.1.3 [#1058](https://github.com/cliqz-oss/adblocker/pull/1058) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.40.6 to 9.41.1 [#1056](https://github.com/cliqz-oss/adblocker/pull/1056) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.19.0 to 2.20.0 [#1054](https://github.com/cliqz-oss/adblocker/pull/1054) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.18.2 to 2.19.0 [#1050](https://github.com/cliqz-oss/adblocker/pull/1050) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.40.5 to 9.40.6 [#1047](https://github.com/cliqz-oss/adblocker/pull/1047) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 4.0.1 to 5.0.0 [#1045](https://github.com/cliqz-oss/adblocker/pull/1045) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.18.1 to 2.18.2 [#1044](https://github.com/cliqz-oss/adblocker/pull/1044) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.9.5 to 3.9.6 [#1043](https://github.com/cliqz-oss/adblocker/pull/1043) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.37 to 5.6.38 [#1036](https://github.com/cliqz-oss/adblocker/pull/1036) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 3.0.0 to 3.0.1 [#1035](https://github.com/cliqz-oss/adblocker/pull/1035) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.36 to 5.6.37 [#1033](https://github.com/cliqz-oss/adblocker/pull/1033) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.18.0 to 2.18.1 [#1032](https://github.com/cliqz-oss/adblocker/pull/1032) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.40.4 to 9.40.5 [#1031](https://github.com/cliqz-oss/adblocker/pull/1031) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.3.3 to 8.3.4 [#1028](https://github.com/cliqz-oss/adblocker/pull/1028) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.35 to 5.6.36 [#1027](https://github.com/cliqz-oss/adblocker/pull/1027) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.39.0 to 9.40.4 [#1025](https://github.com/cliqz-oss/adblocker/pull/1025) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 4.0.0 to 4.0.1 [#1024](https://github.com/cliqz-oss/adblocker/pull/1024) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 8.0.1 to 8.1.0 [#1019](https://github.com/cliqz-oss/adblocker/pull/1019) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.17.1 to 2.18.0 [#1017](https://github.com/cliqz-oss/adblocker/pull/1017) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.34 to 5.6.35 [#1016](https://github.com/cliqz-oss/adblocker/pull/1016) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.17.0 to 2.17.1 [#1012](https://github.com/cliqz-oss/adblocker/pull/1012) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.3.2 to 8.3.3 [#1011](https://github.com/cliqz-oss/adblocker/pull/1011) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.16.1 to 2.17.0 [#1008](https://github.com/cliqz-oss/adblocker/pull/1008) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.33 to 5.6.34 [#1006](https://github.com/cliqz-oss/adblocker/pull/1006) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.3.0 to 4.0.0 [#1004](https://github.com/cliqz-oss/adblocker/pull/1004) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.3.1 to 8.3.2 [#1003](https://github.com/cliqz-oss/adblocker/pull/1003) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @remusao/small from 1.1.2 to 1.2.0 [#1000](https://github.com/cliqz-oss/adblocker/pull/1000) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.31 to 5.6.33 [#1001](https://github.com/cliqz-oss/adblocker/pull/1001) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.15.0 to 2.16.1 [#996](https://github.com/cliqz-oss/adblocker/pull/996) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @remusao/guess-url-type from 1.1.2 to 1.2.0 [#998](https://github.com/cliqz-oss/adblocker/pull/998) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @remusao/smaz from 1.8.0 to 1.9.0 [#999](https://github.com/cliqz-oss/adblocker/pull/999) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @remusao/smaz-generate from 1.8.0 to 1.9.0 [#997](https://github.com/cliqz-oss/adblocker/pull/997) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.30 to 5.6.31 [#989](https://github.com/cliqz-oss/adblocker/pull/989) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump playwright from 1.1.0 to 1.1.1 [#987](https://github.com/cliqz-oss/adblocker/pull/987) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.118 to 0.0.119 [#1063](https://github.com/cliqz-oss/adblocker/pull/1063) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.117 to 0.0.118 [#1057](https://github.com/cliqz-oss/adblocker/pull/1057) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  - build(deps): bump webextension-polyfill-ts from 0.18.0 to 0.19.0 [#1037](https://github.com/cliqz-oss/adblocker/pull/1037) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  - build(deps): bump webextension-polyfill-ts from 0.17.0 to 0.18.0 [#1029](https://github.com/cliqz-oss/adblocker/pull/1029) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.116 to 0.0.117 [#1021](https://github.com/cliqz-oss/adblocker/pull/1021) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.115 to 0.0.116 [#1009](https://github.com/cliqz-oss/adblocker/pull/1009) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.114 to 0.0.115 [#995](https://github.com/cliqz-oss/adblocker/pull/995) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-playwright`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump mocha from 7.2.0 to 8.0.1 [#986](https://github.com/cliqz-oss/adblocker/pull/986) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.16.0 (Wed Jun 10 2020)

#### :rocket: New Feature

- `@cliqz/adblocker-playwright`, `@cliqz/adblocker`
  - feature: add support for Playwright blocking [#417](https://github.com/cliqz-oss/adblocker/pull/417) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#982](https://github.com/cliqz-oss/adblocker/pull/982) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#978](https://github.com/cliqz-oss/adblocker/pull/978) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#972](https://github.com/cliqz-oss/adblocker/pull/972) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#971](https://github.com/cliqz-oss/adblocker/pull/971) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#970](https://github.com/cliqz-oss/adblocker/pull/970) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#966](https://github.com/cliqz-oss/adblocker/pull/966) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#960](https://github.com/cliqz-oss/adblocker/pull/960) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#958](https://github.com/cliqz-oss/adblocker/pull/958) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#953](https://github.com/cliqz-oss/adblocker/pull/953) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#950](https://github.com/cliqz-oss/adblocker/pull/950) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#948](https://github.com/cliqz-oss/adblocker/pull/948) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#946](https://github.com/cliqz-oss/adblocker/pull/946) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#940](https://github.com/cliqz-oss/adblocker/pull/940) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#935](https://github.com/cliqz-oss/adblocker/pull/935) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#933](https://github.com/cliqz-oss/adblocker/pull/933) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#932](https://github.com/cliqz-oss/adblocker/pull/932) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump chalk from 4.0.0 to 4.1.0 [#984](https://github.com/cliqz-oss/adblocker/pull/984) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.14.0 to 2.15.0 [#981](https://github.com/cliqz-oss/adblocker/pull/981) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump lerna from 3.22.0 to 3.22.1 [#979](https://github.com/cliqz-oss/adblocker/pull/979) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 8.0.0 to 8.0.1 [#976](https://github.com/cliqz-oss/adblocker/pull/976) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.29 to 5.6.30 [#974](https://github.com/cliqz-oss/adblocker/pull/974) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.13.1 to 2.14.0 [#975](https://github.com/cliqz-oss/adblocker/pull/975) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.38.2 to 9.39.0 [#969](https://github.com/cliqz-oss/adblocker/pull/969) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.9.3 to 3.9.5 [#967](https://github.com/cliqz-oss/adblocker/pull/967) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.13.0 to 2.13.1 [#965](https://github.com/cliqz-oss/adblocker/pull/965) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.38.1 to 9.38.2 [#963](https://github.com/cliqz-oss/adblocker/pull/963) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.38.0 to 9.38.1 [#962](https://github.com/cliqz-oss/adblocker/pull/962) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.12.1 to 2.13.0 [#961](https://github.com/cliqz-oss/adblocker/pull/961) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.12.0 to 2.12.1 [#959](https://github.com/cliqz-oss/adblocker/pull/959) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.2.0 to 3.3.0 [#957](https://github.com/cliqz-oss/adblocker/pull/957) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.3.0 to 8.3.1 [#954](https://github.com/cliqz-oss/adblocker/pull/954) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump nyc from 15.0.1 to 15.1.0 [#952](https://github.com/cliqz-oss/adblocker/pull/952) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.37.0 to 9.38.0 [#951](https://github.com/cliqz-oss/adblocker/pull/951) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.11.2 to 2.12.0 [#949](https://github.com/cliqz-oss/adblocker/pull/949) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.36.4 to 9.37.0 [#945](https://github.com/cliqz-oss/adblocker/pull/945) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.1.0 to 3.2.0 [#944](https://github.com/cliqz-oss/adblocker/pull/944) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.36.3 to 9.36.4 [#943](https://github.com/cliqz-oss/adblocker/pull/943) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.36.2 to 9.36.3 [#942](https://github.com/cliqz-oss/adblocker/pull/942) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.28 to 5.6.29 [#941](https://github.com/cliqz-oss/adblocker/pull/941) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump ts-node from 8.10.1 to 8.10.2 [#939](https://github.com/cliqz-oss/adblocker/pull/939) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.27 to 5.6.28 [#938](https://github.com/cliqz-oss/adblocker/pull/938) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.11.0 to 2.11.2 [#937](https://github.com/cliqz-oss/adblocker/pull/937) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.9 to 2.11.0 [#936](https://github.com/cliqz-oss/adblocker/pull/936) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.26 to 5.6.27 [#934](https://github.com/cliqz-oss/adblocker/pull/934) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`
  - build(deps-dev): bump @rollup/plugin-commonjs from 12.0.0 to 13.0.0 [#977](https://github.com/cliqz-oss/adblocker/pull/977) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  - build(deps): bump webextension-polyfill-ts from 0.16.0 to 0.17.0 [#973](https://github.com/cliqz-oss/adblocker/pull/973) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler from 0.25.2 to 0.26.0 [#956](https://github.com/cliqz-oss/adblocker/pull/956) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.15.1 (Mon May 25 2020)

#### :bug: Bug Fix

- `@cliqz/adblocker`
  - Make fast hash outputs consistent and fix use of globals [#931](https://github.com/cliqz-oss/adblocker/pull/931) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#929](https://github.com/cliqz-oss/adblocker/pull/929) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#926](https://github.com/cliqz-oss/adblocker/pull/926) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump lerna from 3.21.0 to 3.22.0 [#930](https://github.com/cliqz-oss/adblocker/pull/930) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.8 to 2.10.9 [#928](https://github.com/cliqz-oss/adblocker/pull/928) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.36.1 to 9.36.2 [#927](https://github.com/cliqz-oss/adblocker/pull/927) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  - build(deps): bump webextension-polyfill-ts from 0.15.0 to 0.16.0 [#925](https://github.com/cliqz-oss/adblocker/pull/925) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.15.0 (Sat May 23 2020)

#### :running_woman: Performance

- `@cliqz/adblocker`
  - Speed-up index creation by using a typed array as histogram. [#924](https://github.com/cliqz-oss/adblocker/pull/924) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Extension engine size script [#921](https://github.com/cliqz-oss/adblocker/pull/921) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update local assets [#917](https://github.com/cliqz-oss/adblocker/pull/917) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#908](https://github.com/cliqz-oss/adblocker/pull/908) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#900](https://github.com/cliqz-oss/adblocker/pull/900) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#892](https://github.com/cliqz-oss/adblocker/pull/892) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#890](https://github.com/cliqz-oss/adblocker/pull/890) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#886](https://github.com/cliqz-oss/adblocker/pull/886) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#876](https://github.com/cliqz-oss/adblocker/pull/876) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#874](https://github.com/cliqz-oss/adblocker/pull/874) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#867](https://github.com/cliqz-oss/adblocker/pull/867) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#861](https://github.com/cliqz-oss/adblocker/pull/861) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#859](https://github.com/cliqz-oss/adblocker/pull/859) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#857](https://github.com/cliqz-oss/adblocker/pull/857) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#856](https://github.com/cliqz-oss/adblocker/pull/856) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#854](https://github.com/cliqz-oss/adblocker/pull/854) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#849](https://github.com/cliqz-oss/adblocker/pull/849) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump mocha from 7.1.2 to 7.2.0 [#923](https://github.com/cliqz-oss/adblocker/pull/923) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.25 to 5.6.26 [#922](https://github.com/cliqz-oss/adblocker/pull/922) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.36.0 to 9.36.1 [#920](https://github.com/cliqz-oss/adblocker/pull/920) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.7 to 2.10.8 [#919](https://github.com/cliqz-oss/adblocker/pull/919) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.35.2 to 9.36.0 [#918](https://github.com/cliqz-oss/adblocker/pull/918) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.35.1 to 9.35.2 [#915](https://github.com/cliqz-oss/adblocker/pull/915) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.5 to 2.10.7 [#914](https://github.com/cliqz-oss/adblocker/pull/914) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.35.0 to 9.35.1 [#913](https://github.com/cliqz-oss/adblocker/pull/913) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.34.1 to 9.35.0 [#912](https://github.com/cliqz-oss/adblocker/pull/912) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/sinon from 9.0.3 to 9.0.4 [#911](https://github.com/cliqz-oss/adblocker/pull/911) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.9.2 to 3.9.3 [#903](https://github.com/cliqz-oss/adblocker/pull/903) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.4 to 2.10.5 [#902](https://github.com/cliqz-oss/adblocker/pull/902) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/sinon from 9.0.1 to 9.0.3 [#901](https://github.com/cliqz-oss/adblocker/pull/901) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.33.2 to 9.34.1 [#897](https://github.com/cliqz-oss/adblocker/pull/897) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.3 to 2.10.4 [#895](https://github.com/cliqz-oss/adblocker/pull/895) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.2 to 2.10.3 [#894](https://github.com/cliqz-oss/adblocker/pull/894) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.32.3 to 9.33.2 [#893](https://github.com/cliqz-oss/adblocker/pull/893) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.0.4 to 3.1.0 [#891](https://github.com/cliqz-oss/adblocker/pull/891) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.32.2 to 9.32.3 [#889](https://github.com/cliqz-oss/adblocker/pull/889) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.32.1 to 9.32.2 [#888](https://github.com/cliqz-oss/adblocker/pull/888) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.32.0 to 9.32.1 [#887](https://github.com/cliqz-oss/adblocker/pull/887) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/sinon from 9.0.0 to 9.0.1 [#884](https://github.com/cliqz-oss/adblocker/pull/884) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.1 to 2.10.2 [#882](https://github.com/cliqz-oss/adblocker/pull/882) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/benchmark from 1.0.32 to 1.0.33 [#880](https://github.com/cliqz-oss/adblocker/pull/880) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.10.0 to 2.10.1 [#879](https://github.com/cliqz-oss/adblocker/pull/879) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.2.5 to 8.3.0 [#878](https://github.com/cliqz-oss/adblocker/pull/878) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.9.1 to 2.10.0 [#872](https://github.com/cliqz-oss/adblocker/pull/872) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump lerna from 3.20.2 to 3.21.0 [#871](https://github.com/cliqz-oss/adblocker/pull/871) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.8.3 to 3.9.2 [#868](https://github.com/cliqz-oss/adblocker/pull/868) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/benchmark from 1.0.31 to 1.0.32 [#866](https://github.com/cliqz-oss/adblocker/pull/866) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 2.0.1 to 2.1.0 [#864](https://github.com/cliqz-oss/adblocker/pull/864) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.31.2 to 9.32.0 [#863](https://github.com/cliqz-oss/adblocker/pull/863) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.31.1 to 9.31.2 [#862](https://github.com/cliqz-oss/adblocker/pull/862) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.9.0 to 2.9.1 [#860](https://github.com/cliqz-oss/adblocker/pull/860) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.8.2 to 2.9.0 [#858](https://github.com/cliqz-oss/adblocker/pull/858) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup-plugin-sourcemaps from 0.6.1 to 0.6.2 [#855](https://github.com/cliqz-oss/adblocker/pull/855) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.0.3 to 3.0.4 [#853](https://github.com/cliqz-oss/adblocker/pull/853) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.8.1 to 2.8.2 [#852](https://github.com/cliqz-oss/adblocker/pull/852) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.8.0 to 2.8.1 [#851](https://github.com/cliqz-oss/adblocker/pull/851) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.24 to 5.6.25 [#850](https://github.com/cliqz-oss/adblocker/pull/850) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.0.2 to 3.0.3 [#848](https://github.com/cliqz-oss/adblocker/pull/848) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.113 to 0.0.114 [#909](https://github.com/cliqz-oss/adblocker/pull/909) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump @rollup/plugin-node-resolve from 7.1.3 to 8.0.0 [#907](https://github.com/cliqz-oss/adblocker/pull/907) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`
  - build(deps-dev): bump @rollup/plugin-commonjs from 11.1.0 to 12.0.0 [#906](https://github.com/cliqz-oss/adblocker/pull/906) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-puppeteer`
  - build(deps): bump @types/puppeteer from 2.1.0 to 3.0.0 [#899](https://github.com/cliqz-oss/adblocker/pull/899) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.112 to 0.0.113 [#898](https://github.com/cliqz-oss/adblocker/pull/898) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.111 to 0.0.112 [#881](https://github.com/cliqz-oss/adblocker/pull/881) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.110 to 0.0.111 [#877](https://github.com/cliqz-oss/adblocker/pull/877) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.109 to 0.0.110 [#875](https://github.com/cliqz-oss/adblocker/pull/875) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.108 to 0.0.109 [#873](https://github.com/cliqz-oss/adblocker/pull/873) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.107 to 0.0.108 [#865](https://github.com/cliqz-oss/adblocker/pull/865) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.14.4 (Wed May 06 2020)

#### :nail_care: Polish

- `@cliqz/adblocker`
  - Update local assets with new list [#847](https://github.com/cliqz-oss/adblocker/pull/847) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#845](https://github.com/cliqz-oss/adblocker/pull/845) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :memo: Documentation

- Update README.md [#841](https://github.com/cliqz-oss/adblocker/pull/841) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump rollup from 2.7.6 to 2.8.0 [#846](https://github.com/cliqz-oss/adblocker/pull/846) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.30.5 to 9.31.1 [#842](https://github.com/cliqz-oss/adblocker/pull/842) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.106 to 0.0.107 [#843](https://github.com/cliqz-oss/adblocker/pull/843) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.14.3 (Mon May 04 2020)

#### ⚠️  Pushed to `master`

- Update README.md with Cliqz badge ([@remusao](https://github.com/remusao))

#### :house: Internal

- Optimize static assets [#829](https://github.com/cliqz-oss/adblocker/pull/829) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update local assets [#840](https://github.com/cliqz-oss/adblocker/pull/840) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#839](https://github.com/cliqz-oss/adblocker/pull/839) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#834](https://github.com/cliqz-oss/adblocker/pull/834) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#831](https://github.com/cliqz-oss/adblocker/pull/831) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#822](https://github.com/cliqz-oss/adblocker/pull/822) ([@adblocker-bot](https://github.com/adblocker-bot) [@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update local assets [#817](https://github.com/cliqz-oss/adblocker/pull/817) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#815](https://github.com/cliqz-oss/adblocker/pull/815) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#807](https://github.com/cliqz-oss/adblocker/pull/807) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#804](https://github.com/cliqz-oss/adblocker/pull/804) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#803](https://github.com/cliqz-oss/adblocker/pull/803) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#801](https://github.com/cliqz-oss/adblocker/pull/801) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#794](https://github.com/cliqz-oss/adblocker/pull/794) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps): bump ts-node from 8.9.1 to 8.10.1 [#838](https://github.com/cliqz-oss/adblocker/pull/838) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.30.4 to 9.30.5 [#836](https://github.com/cliqz-oss/adblocker/pull/836) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.30.3 to 9.30.4 [#835](https://github.com/cliqz-oss/adblocker/pull/835) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.2.4 to 8.2.5 [#828](https://github.com/cliqz-oss/adblocker/pull/828) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.7.5 to 2.7.6 [#827](https://github.com/cliqz-oss/adblocker/pull/827) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.7.4 to 2.7.5 [#824](https://github.com/cliqz-oss/adblocker/pull/824) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.7.3 to 2.7.4 [#823](https://github.com/cliqz-oss/adblocker/pull/823) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.0.1 to 3.0.2 [#821](https://github.com/cliqz-oss/adblocker/pull/821) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.2.3 to 8.2.4 [#820](https://github.com/cliqz-oss/adblocker/pull/820) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.30.2 to 9.30.3 [#819](https://github.com/cliqz-oss/adblocker/pull/819) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.7.2 to 2.7.3 [#818](https://github.com/cliqz-oss/adblocker/pull/818) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump tslint from 6.1.1 to 6.1.2 [#816](https://github.com/cliqz-oss/adblocker/pull/816) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump mocha from 7.1.1 to 7.1.2 [#810](https://github.com/cliqz-oss/adblocker/pull/810) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.30.1 to 9.30.2 [#809](https://github.com/cliqz-oss/adblocker/pull/809) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump ts-node from 8.9.0 to 8.9.1 [#808](https://github.com/cliqz-oss/adblocker/pull/808) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump concurrently from 5.1.0 to 5.2.0 [#806](https://github.com/cliqz-oss/adblocker/pull/806) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.23 to 5.6.24 [#805](https://github.com/cliqz-oss/adblocker/pull/805) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.7.1 to 2.7.2 [#800](https://github.com/cliqz-oss/adblocker/pull/800) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.30.0 to 9.30.1 [#799](https://github.com/cliqz-oss/adblocker/pull/799) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.29.0 to 9.30.0 [#798](https://github.com/cliqz-oss/adblocker/pull/798) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 3.0.0 to 3.0.1 [#797](https://github.com/cliqz-oss/adblocker/pull/797) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.7.0 to 2.7.1 [#795](https://github.com/cliqz-oss/adblocker/pull/795) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.28.3 to 9.29.0 [#793](https://github.com/cliqz-oss/adblocker/pull/793) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.6.1 to 2.7.0 [#792](https://github.com/cliqz-oss/adblocker/pull/792) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump prettier from 2.0.4 to 2.0.5 [#791](https://github.com/cliqz-oss/adblocker/pull/791) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  - build(deps): bump webextension-polyfill-ts from 0.14.0 to 0.15.0 [#833](https://github.com/cliqz-oss/adblocker/pull/833) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump rollup-plugin-sourcemaps from 0.5.0 to 0.6.1 [#830](https://github.com/cliqz-oss/adblocker/pull/830) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.104 to 0.0.106 [#813](https://github.com/cliqz-oss/adblocker/pull/813) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.14.2 (Tue Apr 21 2020)

#### :nail_care: Polish

- `@cliqz/adblocker`
  - Make third-party detection more robust [#790](https://github.com/cliqz-oss/adblocker/pull/790) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#788](https://github.com/cliqz-oss/adblocker/pull/788) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#785](https://github.com/cliqz-oss/adblocker/pull/785) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#784](https://github.com/cliqz-oss/adblocker/pull/784) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#782](https://github.com/cliqz-oss/adblocker/pull/782) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#778](https://github.com/cliqz-oss/adblocker/pull/778) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#775](https://github.com/cliqz-oss/adblocker/pull/775) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#773](https://github.com/cliqz-oss/adblocker/pull/773) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#769](https://github.com/cliqz-oss/adblocker/pull/769) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#764](https://github.com/cliqz-oss/adblocker/pull/764) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#760](https://github.com/cliqz-oss/adblocker/pull/760) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#755](https://github.com/cliqz-oss/adblocker/pull/755) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#750](https://github.com/cliqz-oss/adblocker/pull/750) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps): bump ts-node from 8.8.2 to 8.9.0 [#789](https://github.com/cliqz-oss/adblocker/pull/789) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.28.0 to 9.28.3 [#787](https://github.com/cliqz-oss/adblocker/pull/787) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.27.3 to 9.28.0 [#781](https://github.com/cliqz-oss/adblocker/pull/781) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.2.2 to 8.2.3 [#780](https://github.com/cliqz-oss/adblocker/pull/780) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.27.2 to 9.27.3 [#779](https://github.com/cliqz-oss/adblocker/pull/779) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump puppeteer from 2.1.1 to 3.0.0 [#777](https://github.com/cliqz-oss/adblocker/pull/777) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.27.1 to 9.27.2 [#776](https://github.com/cliqz-oss/adblocker/pull/776) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.27.0 to 9.27.1 [#774](https://github.com/cliqz-oss/adblocker/pull/774) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.8 to 9.27.0 [#772](https://github.com/cliqz-oss/adblocker/pull/772) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.2.1 to 8.2.2 [#770](https://github.com/cliqz-oss/adblocker/pull/770) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler from 0.25.1 to 0.25.2 [#768](https://github.com/cliqz-oss/adblocker/pull/768) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler from 0.25.0 to 0.25.1 [#767](https://github.com/cliqz-oss/adblocker/pull/767) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.6.0 to 2.6.1 [#765](https://github.com/cliqz-oss/adblocker/pull/765) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-commonjs from 11.0.2 to 11.1.0 [#762](https://github.com/cliqz-oss/adblocker/pull/762) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 7.1.2 to 7.1.3 [#763](https://github.com/cliqz-oss/adblocker/pull/763) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 7.1.1 to 7.1.2 [#761](https://github.com/cliqz-oss/adblocker/pull/761) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node-fetch from 2.5.5 to 2.5.6 [#759](https://github.com/cliqz-oss/adblocker/pull/759) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.5.0 to 2.6.0 [#757](https://github.com/cliqz-oss/adblocker/pull/757) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.4.0 to 2.5.0 [#756](https://github.com/cliqz-oss/adblocker/pull/756) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.22 to 5.6.23 [#754](https://github.com/cliqz-oss/adblocker/pull/754) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.3.5 to 2.4.0 [#753](https://github.com/cliqz-oss/adblocker/pull/753) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.3.4 to 2.3.5 [#752](https://github.com/cliqz-oss/adblocker/pull/752) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler from 0.24.0 to 0.25.0 [#766](https://github.com/cliqz-oss/adblocker/pull/766) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  - build(deps): bump @types/chrome from 0.0.103 to 0.0.104 [#751](https://github.com/cliqz-oss/adblocker/pull/751) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.14.1 (Thu Apr 09 2020)

### Release Notes

_From #746_

* Make sure that all unsupported procedural selectors from cosmetic filters are dropped to ensure that we only inject valid CSS selectors.
* Fix matching of `domain=` option for domain filters in cases where specified domain is a subdomain instead of full hostname or full domain.
* Fix partyness detection for requests without a valid domain (but having a valid hostname). This fixes matching against localhost request (for instance).
* Fix engine updates stress test which allows to replay all day-to-day diffs since the beginning of times... (currently about a year) and make sure that all updates work and resulting engine is byte-identical with diff-update or full initialization.
* Fix script to analyze size of serialized engines for all presets as well as all kinds of compression (i.e. none, gzip and brotli). This allows to keep track of final size after small-strings compression was applied.

---

#### :nail_care: Polish

- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Fix domain options with subdomains and more... [#746](https://github.com/cliqz-oss/adblocker/pull/746) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#749](https://github.com/cliqz-oss/adblocker/pull/749) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump auto from 9.26.7 to 9.26.8 [#748](https://github.com/cliqz-oss/adblocker/pull/748) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.14.0 (Wed Apr 08 2020)

### Release Notes

_From #738_

* Add `guessRequestTypeFromUrl` config option to all blocker classes which allows to automatically guess the type of network requests based on their URLs. This can be useful for cases where the type is either not available or not accurately inferred (e.g. when requests have time 'other').
* Fix a case where `PuppeteerBlocker` could show an async unhandled exception in console when trying to remove blocked iframes in pages.
* Fix redirection to binary resources (i.e. base64 encoded). An issue caused these resources to be corrupted which means that redirected resources were not valid (e.g. invalid PNG image).
* Redirection to local resources has been improved and will now always succeed thanks to a system of fallback. More types are also available for redirection.
* Improve API of blocker classes (i.e. PuppeteerBlocker, ElectronBlocker and WebExtensionBlocker) to allow creating custom blocking logic of resources using: `blockScripts`, `blockImages`, `blockMedias`, `blockFrames`, `blockFonts`, and `blockStyles`. These helpers can be called on any existing blocker instance, or on a new one created with the `empty()` static method.
* Add initial DSL (Domain Specific Language) to create blocking rules with a high-level API. This is used behind the scene to implement the new blocking methods now exposed by blocker instances. This new DSL should be considered alpha-quality and the API will likely change (and break) in the future. It might also be extended to handle hiding rules (a.k.a cosmetic filters).
* Fix behavior of `NetworkFilter#toString` which should now return a better pretty-printed version of the original filters whenever the `debug` option was false (in which case some information about the original raw string is lost and the string version needs to be inferred back).
* Implement handling of data: URLs. This means that the Request abstraction will now treat them as valid requests and that their type should always be inferred correctly. Moreover, the matching of data: URLs will now only take into account the prefix and ignore anything following the ',' separator.
* Requests with empty domain will not be treated as third-party anymore (this should not happen in the wild and was mostly impacting our unit tests).

---

#### :rocket: New Feature

- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Various improvements [#738](https://github.com/cliqz-oss/adblocker/pull/738) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#740](https://github.com/cliqz-oss/adblocker/pull/740) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#734](https://github.com/cliqz-oss/adblocker/pull/734) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#727](https://github.com/cliqz-oss/adblocker/pull/727) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#721](https://github.com/cliqz-oss/adblocker/pull/721) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#719](https://github.com/cliqz-oss/adblocker/pull/719) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump sinon from 9.0.1 to 9.0.2 [#745](https://github.com/cliqz-oss/adblocker/pull/745) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.6 to 9.26.7 [#744](https://github.com/cliqz-oss/adblocker/pull/744) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.5 to 9.26.6 [#743](https://github.com/cliqz-oss/adblocker/pull/743) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.3.3 to 2.3.4 [#742](https://github.com/cliqz-oss/adblocker/pull/742) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.21 to 5.6.22 [#741](https://github.com/cliqz-oss/adblocker/pull/741) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.4 to 9.26.5 [#739](https://github.com/cliqz-oss/adblocker/pull/739) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.3 to 9.26.4 [#737](https://github.com/cliqz-oss/adblocker/pull/737) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump electron from 8.2.0 to 8.2.1 [#736](https://github.com/cliqz-oss/adblocker/pull/736) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.2 to 9.26.3 [#735](https://github.com/cliqz-oss/adblocker/pull/735) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump prettier from 2.0.3 to 2.0.4 [#731](https://github.com/cliqz-oss/adblocker/pull/731) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.20 to 5.6.21 [#733](https://github.com/cliqz-oss/adblocker/pull/733) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.1 to 9.26.2 [#732](https://github.com/cliqz-oss/adblocker/pull/732) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @remusao/auto-config from 1.1.0 to 1.1.1 [#730](https://github.com/cliqz-oss/adblocker/pull/730) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.26.0 to 9.26.1 [#729](https://github.com/cliqz-oss/adblocker/pull/729) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump prettier from 2.0.2 to 2.0.3 [#728](https://github.com/cliqz-oss/adblocker/pull/728) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.25.4 to 9.26.0 [#726](https://github.com/cliqz-oss/adblocker/pull/726) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.25.2 to 9.25.4 [#725](https://github.com/cliqz-oss/adblocker/pull/725) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump ts-node from 8.8.1 to 8.8.2 [#724](https://github.com/cliqz-oss/adblocker/pull/724) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.3.2 to 2.3.3 [#723](https://github.com/cliqz-oss/adblocker/pull/723) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.19 to 5.6.20 [#722](https://github.com/cliqz-oss/adblocker/pull/722) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.25.1 to 9.25.2 [#720](https://github.com/cliqz-oss/adblocker/pull/720) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.25.0 to 9.25.1 [#718](https://github.com/cliqz-oss/adblocker/pull/718) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump nyc from 15.0.0 to 15.0.1 [#717](https://github.com/cliqz-oss/adblocker/pull/717) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump sandboxed-module from 2.0.3 to 2.0.4 [#716](https://github.com/cliqz-oss/adblocker/pull/716) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.13.1 (Fri Apr 03 2020)

#### :bug: Bug Fix

- `@cliqz/adblocker-puppeteer`
  - Correctly redirect to binary resources in puppeteer blocker [#715](https://github.com/cliqz-oss/adblocker/pull/715) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#711](https://github.com/cliqz-oss/adblocker/pull/711) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#704](https://github.com/cliqz-oss/adblocker/pull/704) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#699](https://github.com/cliqz-oss/adblocker/pull/699) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Move from jest to mocha + chai [#682](https://github.com/cliqz-oss/adblocker/pull/682) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update local assets [#693](https://github.com/cliqz-oss/adblocker/pull/693) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :memo: Documentation

- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`
  - Fix line break in CHANGELOG.md [#691](https://github.com/cliqz-oss/adblocker/pull/691) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump auto from 9.24.0 to 9.25.0 [#714](https://github.com/cliqz-oss/adblocker/pull/714) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.23.1 to 9.24.0 [#713](https://github.com/cliqz-oss/adblocker/pull/713) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.23.0 to 9.23.1 [#712](https://github.com/cliqz-oss/adblocker/pull/712) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.18 to 5.6.19 [#710](https://github.com/cliqz-oss/adblocker/pull/710) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump chalk from 3.0.0 to 4.0.0 [#708](https://github.com/cliqz-oss/adblocker/pull/708) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump tslint from 6.1.0 to 6.1.1 [#707](https://github.com/cliqz-oss/adblocker/pull/707) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.22.4 to 9.23.0 [#706](https://github.com/cliqz-oss/adblocker/pull/706) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.17 to 5.6.18 [#705](https://github.com/cliqz-oss/adblocker/pull/705) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.22.2 to 9.22.4 [#703](https://github.com/cliqz-oss/adblocker/pull/703) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/sinon-chai from 3.2.3 to 3.2.4 [#701](https://github.com/cliqz-oss/adblocker/pull/701) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.3.1 to 2.3.2 [#700](https://github.com/cliqz-oss/adblocker/pull/700) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.16 to 5.6.17 [#695](https://github.com/cliqz-oss/adblocker/pull/695) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.3.0 to 2.3.1 [#694](https://github.com/cliqz-oss/adblocker/pull/694) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.22.1 to 9.22.2 [#692](https://github.com/cliqz-oss/adblocker/pull/692) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension-cosmetics`
  - build(deps-dev): bump @types/sinon from 7.5.2 to 9.0.0 [#702](https://github.com/cliqz-oss/adblocker/pull/702) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.13.0 (Mon Mar 30 2020)

### Release Notes

_From #690_

PuppeteerBlocker is now more powerful and will be able to better block ads on most websites. Firstly, a bug was fixed which prevented injection of cosmetics in the main frame of pages. Secondly, PuppeteerBlocker will now monitor the DOM for changes to make sure that ads which load later are still "handled" (if you know what I mean). Lastly, PuppeteerBlocker is now able to look for advertisement iframes and remove them from the DOM completely, no more blank spaces left unattended...

---

#### :rocket: New Feature

- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension-cosmetics`
  - Fix PuppeteerBlocker and enable blocking of frames and DOM monitoring. [#690](https://github.com/cliqz-oss/adblocker/pull/690) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets [#685](https://github.com/cliqz-oss/adblocker/pull/685) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets [#681](https://github.com/cliqz-oss/adblocker/pull/681) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

- build(deps): bump jsdom from 16.2.1 to 16.2.2 [#688](https://github.com/cliqz-oss/adblocker/pull/688) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump tldts-experimental from 5.6.15 to 5.6.16 [#686](https://github.com/cliqz-oss/adblocker/pull/686) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump rollup from 2.2.0 to 2.3.0 [#687](https://github.com/cliqz-oss/adblocker/pull/687) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.12.3 (Sat Mar 28 2020)

#### :nail_care: Polish

- `@cliqz/adblocker`
  - Do not try to get resources from CDN [#680](https://github.com/cliqz-oss/adblocker/pull/680) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Make sure updater always gets latest version of resources [#679](https://github.com/cliqz-oss/adblocker/pull/679) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update local assets [#676](https://github.com/cliqz-oss/adblocker/pull/676) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Update README.md [#670](https://github.com/cliqz-oss/adblocker/pull/670) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump auto from 9.22.0 to 9.22.1 [#678](https://github.com/cliqz-oss/adblocker/pull/678) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.21.2 to 9.22.0 [#677](https://github.com/cliqz-oss/adblocker/pull/677) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.21.1 to 9.21.2 [#675](https://github.com/cliqz-oss/adblocker/pull/675) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump auto from 9.21.0 to 9.21.1 [#674](https://github.com/cliqz-oss/adblocker/pull/674) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.102 to 0.0.103 [#671](https://github.com/cliqz-oss/adblocker/pull/671) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.12.2 (Fri Mar 27 2020)

#### ⚠️  Pushed to `master`

- Update README.md ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#667](https://github.com/cliqz-oss/adblocker/pull/667) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

-  [#669](https://github.com/cliqz-oss/adblocker/pull/669) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#668](https://github.com/cliqz-oss/adblocker/pull/668) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.12.1 (Thu Mar 26 2020)

#### :nail_care: Polish

- `@cliqz/adblocker`
  - Make id of fuzzy filter invariant under permutations [#666](https://github.com/cliqz-oss/adblocker/pull/666) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.12.0 (Thu Mar 26 2020)

#### :running_woman: Performance

- `@cliqz/adblocker`
  - Fine-tune tokenization by preventing buffer overflows in main loop. [#665](https://github.com/cliqz-oss/adblocker/pull/665) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.11.0 (Thu Mar 26 2020)

#### :rocket: New Feature

- `@cliqz/adblocker`
  - Add support for multi-lines filters (i.e. line continuation) [#663](https://github.com/cliqz-oss/adblocker/pull/663) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Fix compression codebooks generation [#660](https://github.com/cliqz-oss/adblocker/pull/660) ([@remusao](https://github.com/remusao))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#659](https://github.com/cliqz-oss/adblocker/pull/659) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

-  [#664](https://github.com/cliqz-oss/adblocker/pull/664) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#662](https://github.com/cliqz-oss/adblocker/pull/662) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#658](https://github.com/cliqz-oss/adblocker/pull/658) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  -  [#661](https://github.com/cliqz-oss/adblocker/pull/661) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.10.1 (Wed Mar 25 2020)

#### :bug: Bug Fix

- `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-webextension-cosmetics`
  - Abstract DOM monitoring away and fix #573 [#657](https://github.com/cliqz-oss/adblocker/pull/657) ([@remusao](https://github.com/remusao))

#### :house: Internal

- Attempt to fix security issue [#656](https://github.com/cliqz-oss/adblocker/pull/656) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

-  [#651](https://github.com/cliqz-oss/adblocker/pull/651) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#545](https://github.com/cliqz-oss/adblocker/pull/545) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#539](https://github.com/cliqz-oss/adblocker/pull/539) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.10.0 (Wed Mar 25 2020)

#### :running_woman: Performance

- `@cliqz/adblocker`
  - Various optimizations. [#655](https://github.com/cliqz-oss/adblocker/pull/655) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#652](https://github.com/cliqz-oss/adblocker/pull/652) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#648](https://github.com/cliqz-oss/adblocker/pull/648) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#645](https://github.com/cliqz-oss/adblocker/pull/645) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#637](https://github.com/cliqz-oss/adblocker/pull/637) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#636](https://github.com/cliqz-oss/adblocker/pull/636) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#633](https://github.com/cliqz-oss/adblocker/pull/633) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#628](https://github.com/cliqz-oss/adblocker/pull/628) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#626](https://github.com/cliqz-oss/adblocker/pull/626) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#625](https://github.com/cliqz-oss/adblocker/pull/625) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#623](https://github.com/cliqz-oss/adblocker/pull/623) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#622](https://github.com/cliqz-oss/adblocker/pull/622) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#620](https://github.com/cliqz-oss/adblocker/pull/620) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#616](https://github.com/cliqz-oss/adblocker/pull/616) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#613](https://github.com/cliqz-oss/adblocker/pull/613) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#608](https://github.com/cliqz-oss/adblocker/pull/608) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#604](https://github.com/cliqz-oss/adblocker/pull/604) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#601](https://github.com/cliqz-oss/adblocker/pull/601) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#597](https://github.com/cliqz-oss/adblocker/pull/597) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#590](https://github.com/cliqz-oss/adblocker/pull/590) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#572](https://github.com/cliqz-oss/adblocker/pull/572) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#568](https://github.com/cliqz-oss/adblocker/pull/568) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#562](https://github.com/cliqz-oss/adblocker/pull/562) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#557](https://github.com/cliqz-oss/adblocker/pull/557) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#556](https://github.com/cliqz-oss/adblocker/pull/556) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#554](https://github.com/cliqz-oss/adblocker/pull/554) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#549](https://github.com/cliqz-oss/adblocker/pull/549) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#548](https://github.com/cliqz-oss/adblocker/pull/548) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

-  [#650](https://github.com/cliqz-oss/adblocker/pull/650) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#649](https://github.com/cliqz-oss/adblocker/pull/649) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#644](https://github.com/cliqz-oss/adblocker/pull/644) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#642](https://github.com/cliqz-oss/adblocker/pull/642) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#641](https://github.com/cliqz-oss/adblocker/pull/641) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#640](https://github.com/cliqz-oss/adblocker/pull/640) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#639](https://github.com/cliqz-oss/adblocker/pull/639) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#638](https://github.com/cliqz-oss/adblocker/pull/638) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#635](https://github.com/cliqz-oss/adblocker/pull/635) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#634](https://github.com/cliqz-oss/adblocker/pull/634) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#632](https://github.com/cliqz-oss/adblocker/pull/632) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#630](https://github.com/cliqz-oss/adblocker/pull/630) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#627](https://github.com/cliqz-oss/adblocker/pull/627) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#624](https://github.com/cliqz-oss/adblocker/pull/624) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#621](https://github.com/cliqz-oss/adblocker/pull/621) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#619](https://github.com/cliqz-oss/adblocker/pull/619) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#615](https://github.com/cliqz-oss/adblocker/pull/615) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#614](https://github.com/cliqz-oss/adblocker/pull/614) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#612](https://github.com/cliqz-oss/adblocker/pull/612) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#611](https://github.com/cliqz-oss/adblocker/pull/611) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#610](https://github.com/cliqz-oss/adblocker/pull/610) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#609](https://github.com/cliqz-oss/adblocker/pull/609) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#607](https://github.com/cliqz-oss/adblocker/pull/607) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#605](https://github.com/cliqz-oss/adblocker/pull/605) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#603](https://github.com/cliqz-oss/adblocker/pull/603) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#602](https://github.com/cliqz-oss/adblocker/pull/602) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#600](https://github.com/cliqz-oss/adblocker/pull/600) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#599](https://github.com/cliqz-oss/adblocker/pull/599) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#598](https://github.com/cliqz-oss/adblocker/pull/598) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#595](https://github.com/cliqz-oss/adblocker/pull/595) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#594](https://github.com/cliqz-oss/adblocker/pull/594) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#593](https://github.com/cliqz-oss/adblocker/pull/593) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#592](https://github.com/cliqz-oss/adblocker/pull/592) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#591](https://github.com/cliqz-oss/adblocker/pull/591) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#589](https://github.com/cliqz-oss/adblocker/pull/589) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#583](https://github.com/cliqz-oss/adblocker/pull/583) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#582](https://github.com/cliqz-oss/adblocker/pull/582) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#580](https://github.com/cliqz-oss/adblocker/pull/580) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#579](https://github.com/cliqz-oss/adblocker/pull/579) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#578](https://github.com/cliqz-oss/adblocker/pull/578) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#576](https://github.com/cliqz-oss/adblocker/pull/576) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#575](https://github.com/cliqz-oss/adblocker/pull/575) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#574](https://github.com/cliqz-oss/adblocker/pull/574) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#571](https://github.com/cliqz-oss/adblocker/pull/571) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#570](https://github.com/cliqz-oss/adblocker/pull/570) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#569](https://github.com/cliqz-oss/adblocker/pull/569) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#566](https://github.com/cliqz-oss/adblocker/pull/566) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#564](https://github.com/cliqz-oss/adblocker/pull/564) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#563](https://github.com/cliqz-oss/adblocker/pull/563) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#559](https://github.com/cliqz-oss/adblocker/pull/559) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#558](https://github.com/cliqz-oss/adblocker/pull/558) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#555](https://github.com/cliqz-oss/adblocker/pull/555) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#551](https://github.com/cliqz-oss/adblocker/pull/551) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  -  [#653](https://github.com/cliqz-oss/adblocker/pull/653) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  -  [#629](https://github.com/cliqz-oss/adblocker/pull/629) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  -  [#617](https://github.com/cliqz-oss/adblocker/pull/617) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-webextension`
  -  [#596](https://github.com/cliqz-oss/adblocker/pull/596) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#587](https://github.com/cliqz-oss/adblocker/pull/587) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#586](https://github.com/cliqz-oss/adblocker/pull/586) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#560](https://github.com/cliqz-oss/adblocker/pull/560) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  -  [#577](https://github.com/cliqz-oss/adblocker/pull/577) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  -  [#552](https://github.com/cliqz-oss/adblocker/pull/552) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.9.2 (Wed Feb 26 2020)

#### :nail_care: Polish

- Target ES2017 to avoid use of __awaiter tslib helper [#541](https://github.com/cliqz-oss/adblocker/pull/541) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#544](https://github.com/cliqz-oss/adblocker/pull/544) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#537](https://github.com/cliqz-oss/adblocker/pull/537) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Automatically bump internal engine version on codebooks update [#536](https://github.com/cliqz-oss/adblocker/pull/536) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

-  [#542](https://github.com/cliqz-oss/adblocker/pull/542) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#540](https://github.com/cliqz-oss/adblocker/pull/540) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#538](https://github.com/cliqz-oss/adblocker/pull/538) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.9.1 (Sun Feb 23 2020)

#### :bug: Bug Fix

- `@cliqz/adblocker`
  - Bump internal engine representation [#534](https://github.com/cliqz-oss/adblocker/pull/534) ([@remusao](https://github.com/remusao))

#### ⚠️  Pushed to master

- `@cliqz/adblocker`
  - Bump internal engine representation  ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#532](https://github.com/cliqz-oss/adblocker/pull/532) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#529](https://github.com/cliqz-oss/adblocker/pull/529) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#525](https://github.com/cliqz-oss/adblocker/pull/525) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Improve tool to list unsupported filter syntax [#524](https://github.com/cliqz-oss/adblocker/pull/524) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

-  [#533](https://github.com/cliqz-oss/adblocker/pull/533) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#531](https://github.com/cliqz-oss/adblocker/pull/531) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#530](https://github.com/cliqz-oss/adblocker/pull/530) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#528](https://github.com/cliqz-oss/adblocker/pull/528) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#527](https://github.com/cliqz-oss/adblocker/pull/527) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#526](https://github.com/cliqz-oss/adblocker/pull/526) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.9.0 (Thu Feb 20 2020)

#### :running_woman: Performance

- `@cliqz/adblocker`
  - Replace use of setTimeout to delay event by more efficient queueMicrotask. [#523](https://github.com/cliqz-oss/adblocker/pull/523) ([@remusao](https://github.com/remusao))

#### :house: Internal

- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#520](https://github.com/cliqz-oss/adblocker/pull/520) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#515](https://github.com/cliqz-oss/adblocker/pull/515) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#510](https://github.com/cliqz-oss/adblocker/pull/510) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#508](https://github.com/cliqz-oss/adblocker/pull/508) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#503](https://github.com/cliqz-oss/adblocker/pull/503) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#502](https://github.com/cliqz-oss/adblocker/pull/502) ([@adblocker-bot](https://github.com/adblocker-bot))
- `@cliqz/adblocker`
  - Update local assets and compression codebooks [#497](https://github.com/cliqz-oss/adblocker/pull/497) ([@adblocker-bot](https://github.com/adblocker-bot))

#### :nut_and_bolt: Dependencies

-  [#521](https://github.com/cliqz-oss/adblocker/pull/521) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#519](https://github.com/cliqz-oss/adblocker/pull/519) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#517](https://github.com/cliqz-oss/adblocker/pull/517) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#514](https://github.com/cliqz-oss/adblocker/pull/514) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#513](https://github.com/cliqz-oss/adblocker/pull/513) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#509](https://github.com/cliqz-oss/adblocker/pull/509) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#507](https://github.com/cliqz-oss/adblocker/pull/507) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#505](https://github.com/cliqz-oss/adblocker/pull/505) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#498](https://github.com/cliqz-oss/adblocker/pull/498) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker`
  -  [#522](https://github.com/cliqz-oss/adblocker/pull/522) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-webextension-cosmetics`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  -  [#512](https://github.com/cliqz-oss/adblocker/pull/512) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.8.6 (Thu Feb 13 2020)

#### :nail_care: Polish

- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`
  - Move BlockingContext methods back into Blocker class. [#496](https://github.com/cliqz-oss/adblocker/pull/496) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.8.5 (Thu Feb 13 2020)

#### :nail_care: Polish

- `@cliqz/adblocker`
  - Fetch resources from GitHub repository [#495](https://github.com/cliqz-oss/adblocker/pull/495) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.8.4 (Thu Feb 13 2020)

#### :bug: Bug Fix

- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-content`, `@cliqz/adblocker-electron-preload`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Fix implicit tslib dependency [#494](https://github.com/cliqz-oss/adblocker/pull/494) ([@remusao](https://github.com/remusao))

#### :house: Internal

- Add internal label when updating local assets [#492](https://github.com/cliqz-oss/adblocker/pull/492) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.8.3 (Thu Feb 13 2020)

#### ⚠️  Pushed to master

- `@cliqz/adblocker`
  - Bump internal engine representation  ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.8.2 (Wed Feb 12 2020)

#### :bug: Bug Fix

- `@cliqz/adblocker`
  - chore: update local assets [#491](https://github.com/cliqz-oss/adblocker/pull/491) ([@adblocker-bot](https://github.com/adblocker-bot))

#### Authors: 1

- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))

---

# v1.8.1 (Wed Feb 12 2020)

#### :nail_care: Polish

- `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Expose original request details through Request class [#490](https://github.com/cliqz-oss/adblocker/pull/490) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.8.0 (Wed Feb 12 2020)

#### :running_woman: Performance

- `@cliqz/adblocker-circumvention`, `@cliqz/adblocker-electron`, `@cliqz/adblocker-puppeteer`, `@cliqz/adblocker-webextension`, `@cliqz/adblocker`
  - Target ES6 instead of ES3 [#489](https://github.com/cliqz-oss/adblocker/pull/489) ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix

- `@cliqz/adblocker`
  - chore: update local assets [#485](https://github.com/cliqz-oss/adblocker/pull/485) ([@adblocker-bot](https://github.com/adblocker-bot))

#### ⚠️  Pushed to master

- ci: populate npmrc before publishing  ([@remusao](https://github.com/remusao))

#### :house: Internal

- Adopt auto-publishing workflow [#488](https://github.com/cliqz-oss/adblocker/pull/488) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

-  [#487](https://github.com/cliqz-oss/adblocker/pull/487) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#486](https://github.com/cliqz-oss/adblocker/pull/486) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#482](https://github.com/cliqz-oss/adblocker/pull/482) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 3

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))

---

## v1.7.3 (2020-02-11)

#### :nail_care: Polish
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#481](https://github.com/cliqz-oss/adblocker/pull/481) Fix chrome and browser types ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.7.0 (2020-02-10)

#### :rocket: New Feature
* `adblocker`
  * [#478](https://github.com/cliqz-oss/adblocker/pull/478) Implement redirect-rule filters handling ([@remusao](https://github.com/remusao))
* `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker`
  * [#477](https://github.com/cliqz-oss/adblocker/pull/477) Add helper to cache adblocker engine ([@remusao](https://github.com/remusao))
* `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension`
  * [#475](https://github.com/cliqz-oss/adblocker/pull/475) Add helper to know if blocking is enabled in context ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker`
  * [#476](https://github.com/cliqz-oss/adblocker/pull/476) Put types for chrome and firefox as direct dependencies instead of dev ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.6.0 (2020-02-09)

#### :rocket: New Feature
* `adblocker`
  * [#469](https://github.com/cliqz-oss/adblocker/pull/469) Implement redirect=none semantics ([@remusao](https://github.com/remusao))
  * [#468](https://github.com/cliqz-oss/adblocker/pull/468) Implement specifichide, elemhide and aliases ([@remusao](https://github.com/remusao))
  * [#453](https://github.com/cliqz-oss/adblocker/pull/453) Add support for compound HTML filtering rules ([@remusao](https://github.com/remusao))
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#416](https://github.com/cliqz-oss/adblocker/pull/416) Make initializing instances of blockers idempotent ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#464](https://github.com/cliqz-oss/adblocker/pull/464) fix: HTML filtering and scriptlets injection ([@remusao](https://github.com/remusao))

#### :nail_care: Polish
* `adblocker`
  * [#471](https://github.com/cliqz-oss/adblocker/pull/471) Handle disabling scriptlets ([@remusao](https://github.com/remusao))
  * [#470](https://github.com/cliqz-oss/adblocker/pull/470) Generic scriptlets are now correctly rejected ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron-preload`, `adblocker-electron`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#452](https://github.com/cliqz-oss/adblocker/pull/452) chore: update Electron to v8.0.0 ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#423](https://github.com/cliqz-oss/adblocker/pull/423) chore: update dependencies ([@remusao](https://github.com/remusao))
* Other
  * [#419](https://github.com/cliqz-oss/adblocker/pull/419) chore: automate update of locale assets ([@remusao](https://github.com/remusao))
  * [#418](https://github.com/cliqz-oss/adblocker/pull/418) Only run CI tests on Linux ([@remusao](https://github.com/remusao))

#### Committers: 3
- Adblocker Bot ([@adblocker-bot](https://github.com/adblocker-bot))
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.5.0 (2020-01-16)

#### :nail_care: Polish
* `adblocker`
  * [#414](https://github.com/cliqz-oss/adblocker/pull/414) Implement retry mechanism while fetching resources ([@remusao](https://github.com/remusao))
* `adblocker-webextension`
  * [#413](https://github.com/cliqz-oss/adblocker/pull/413) webextension: handler for runtime messages now returns a promise ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#415](https://github.com/cliqz-oss/adblocker/pull/415) Clean-up tooling ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.20 (2020-01-15)

#### :house: Internal
* [#412](https://github.com/cliqz-oss/adblocker/pull/412) Migrate local GitHub actions to TypeScript ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.19 (2020-01-15)

#### :house: Internal
* [#410](https://github.com/cliqz-oss/adblocker/pull/410) Add dependabot config into repository ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.12 (2020-01-15)

#### :house: Internal
* [#409](https://github.com/cliqz-oss/adblocker/pull/409) Add action to release on NPM ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.2 (2020-01-15)

#### :memo: Documentation
* [#404](https://github.com/cliqz-oss/adblocker/pull/404) docs: add support for PR labels ([@remusao](https://github.com/remusao))

#### :house: Internal
* [#407](https://github.com/cliqz-oss/adblocker/pull/407) Add GitHub actions for releasing on GitHub ([@remusao](https://github.com/remusao))
* [#405](https://github.com/cliqz-oss/adblocker/pull/405) Make use of GitHub actions for CI ([@remusao](https://github.com/remusao))

#### Committers: 1
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.1 (2019-12-16)

#### :bug: Bug Fix
* `adblocker-puppeteer`
  * [#401](https://github.com/cliqz-oss/adblocker/pull/401) puppeteer: do not block main frames ([@remusao](https://github.com/remusao))

#### :memo: Documentation
* `adblocker`
  * [#400](https://github.com/cliqz-oss/adblocker/pull/400) Fix cosmetics readme ([@fcjr](https://github.com/fcjr))

#### :house: Internal
* [#399](https://github.com/cliqz-oss/adblocker/pull/399) Remove travis config ([@remusao](https://github.com/remusao))
* [#397](https://github.com/cliqz-oss/adblocker/pull/397) Set up CI with Azure Pipelines ([@chrmod](https://github.com/chrmod))

#### Committers: 3
- Frank Chiarulli Jr. ([@fcjr](https://github.com/fcjr))
- Krzysztof Jan Modras ([@chrmod](https://github.com/chrmod))
- Rémi ([@remusao](https://github.com/remusao))


## v1.4.0 (2019-11-12)

#### :bug: Bug Fix
* `adblocker`
  * [#388](https://github.com/cliqz-oss/adblocker/pull/388) Fix websocket filters handling ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-puppeteer-example`, `adblocker-puppeteer`
  * [#386](https://github.com/cliqz-oss/adblocker/pull/386) Bump puppeteer to v2 ([@remusao](https://github.com/remusao))
* `adblocker-electron-example`, `adblocker-electron`
  * [#385](https://github.com/cliqz-oss/adblocker/pull/385) Bump electron version to 7 + inject CSS with 'user' origin ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.3.1 (2019-10-09)

#### :bug: Bug Fix
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#373](https://github.com/cliqz-oss/adblocker/pull/373) fix: fetching resources.txt from CDN ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.3.0 (2019-10-07)

#### :nail_care: Polish
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#368](https://github.com/cliqz-oss/adblocker/pull/368) make it easier to use HTML filtering outside of `WebExtensionBlocker` ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.2.0 (2019-10-01)

#### :rocket: New Feature
* `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#339](https://github.com/cliqz-oss/adblocker/pull/339) Support html filtering ([@remusao](https://github.com/remusao))
* `adblocker`
  * [#338](https://github.com/cliqz-oss/adblocker/pull/338) feat: add support for 'all' option ([@remusao](https://github.com/remusao))
  * [#337](https://github.com/cliqz-oss/adblocker/pull/337) feat: add support for redirect-rule option ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker-electron`
  * [#358](https://github.com/cliqz-oss/adblocker/pull/358) fix: cosmetics injection in Electron ([@remusao](https://github.com/remusao))

#### :nail_care: Polish
* `adblocker-webextension`
  * [#359](https://github.com/cliqz-oss/adblocker/pull/359) removeListener regardless of engine config ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`, `adblocker`
  * [#333](https://github.com/cliqz-oss/adblocker/pull/333) simplify reverse index by removing special tokens handling ([@remusao](https://github.com/remusao))

#### :memo: Documentation
* [#355](https://github.com/cliqz-oss/adblocker/pull/355) Add slides of talk at adblockerdevsummit 2019 ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#335](https://github.com/cliqz-oss/adblocker/pull/335) chore: update local assets + generate compression codebooks ([@remusao](https://github.com/remusao))

#### :running_woman: Performance
* `adblocker-electron-example`, `adblocker-puppeteer-example`, `adblocker-webextension-example`, `adblocker`
  * [#334](https://github.com/cliqz-oss/adblocker/pull/334) chore: clean-ups and small optimizations ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.1.0 (2019-09-17)

#### :rocket: New Feature
* `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension`
  * [#328](https://github.com/cliqz-oss/adblocker/pull/328) Allow blocker unload ([@remusao](https://github.com/remusao))
* `adblocker`
  * [#327](https://github.com/cliqz-oss/adblocker/pull/327) feature: support inline-script and inline-font options ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#329](https://github.com/cliqz-oss/adblocker/pull/329) add test case to make sure +js() can be whitelisted ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`
  * [#314](https://github.com/cliqz-oss/adblocker/pull/314) bench: add runner for minbrowser blocker ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.0.2 (2019-09-02)

#### :bug: Bug Fix
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#312](https://github.com/cliqz-oss/adblocker/pull/312) Fix block main document ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v1.0.0 (2019-08-27)

#### :nail_care: Polish
* `adblocker-content`, `adblocker-puppeteer-example`, `adblocker`
  * [#300](https://github.com/cliqz-oss/adblocker/pull/300) small improvements ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker-benchmarks`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#294](https://github.com/cliqz-oss/adblocker/pull/294) chore: clean-ups ([@remusao](https://github.com/remusao))
* `adblocker-benchmarks`, `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#255](https://github.com/cliqz-oss/adblocker/pull/255) switch to using @cliqz/metalint for project linting ([@remusao](https://github.com/remusao))
* Other
  * [#293](https://github.com/cliqz-oss/adblocker/pull/293) ci: enable latest Node.js + LTS ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.14.0 (2019-08-20)

#### :nail_care: Polish
* `adblocker-electron`, `adblocker-puppeteer`, `adblocker-webextension`
  * [#288](https://github.com/cliqz-oss/adblocker/pull/288) only register listeners when network/cosmetics filtering is enabled ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#290](https://github.com/cliqz-oss/adblocker/pull/290) clean-up and update local assets + regenerate codebooks ([@remusao](https://github.com/remusao))
* Other
  * [#289](https://github.com/cliqz-oss/adblocker/pull/289) chore: remove un-used dependencies ([@remusao](https://github.com/remusao))

#### :running_woman: Performance
* `adblocker-webextension-example`, `adblocker`
  * [#287](https://github.com/cliqz-oss/adblocker/pull/287) Optimize cosmetics injection ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.13.0 (2019-08-16)

#### :memo: Documentation
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#281](https://github.com/cliqz-oss/adblocker/pull/281) Update readmes ([@remusao](https://github.com/remusao))

#### :house: Internal
* Other
  * [#265](https://github.com/cliqz-oss/adblocker/pull/265) fix memory issue by pinning Node.js version ([@remusao](https://github.com/remusao))
* `adblocker-circumvention`, `adblocker-content`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#264](https://github.com/cliqz-oss/adblocker/pull/264) create new @cliqz/adblocker-content package with common utils ([@remusao](https://github.com/remusao))

#### :running_woman: Performance
* `adblocker`
  * [#257](https://github.com/cliqz-oss/adblocker/pull/257) allow correct size allocation for data views ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.12.1 (2019-08-13)

#### :boom: Breaking Change
* `adblocker-electron`, `adblocker`
  * [#248](https://github.com/cliqz-oss/adblocker/pull/248) electron: promote mutationObserver option to main config + fix constructor and parse methods ([@remusao](https://github.com/remusao))

#### :rocket: New Feature
* `adblocker-electron-example`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#251](https://github.com/cliqz-oss/adblocker/pull/251) implement simple event emitter for FiltersEngine and sub-classes ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix
* `adblocker-circumvention`, `adblocker-electron-example`, `adblocker-electron`, `adblocker-puppeteer-example`, `adblocker-puppeteer`, `adblocker-webextension-cosmetics`, `adblocker-webextension-example`, `adblocker-webextension`, `adblocker`
  * [#219](https://github.com/cliqz-oss/adblocker/pull/219) fix source maps in all packages ([@remusao](https://github.com/remusao))

#### :house: Internal
* `adblocker`
  * [#256](https://github.com/cliqz-oss/adblocker/pull/256) Update assets + re-generate compression codebooks ([@remusao](https://github.com/remusao))
* `adblocker-electron-example`, `adblocker-electron`, `adblocker`
  * [#250](https://github.com/cliqz-oss/adblocker/pull/250) electron: update to 6.0.1 ([@remusao](https://github.com/remusao))

#### Committers: 2
- Rémi ([@remusao](https://github.com/remusao))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
