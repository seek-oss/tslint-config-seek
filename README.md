[![Build Status](https://img.shields.io/travis/seek-oss/tslint-config-seek/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/tslint-config-seek) [![npm](https://img.shields.io/npm/v/tslint-config-seek.svg?style=flat-square)](https://www.npmjs.com/package/tslint-config-seek) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# tslint-config-seek

This package includes the shareable [TSLint](https://palantir.github.io/tslint/) configuration used by [SEEK](https://github.com/seek-oss/).

Note: this assumes you’re using a tsconfig.json with strict and noUnusedLocals enabled.

## Usage

First, install this package and TSLint.

Then create a file named `tslint.json` with following contents in the root folder of your project:

```json
{
  "extends": "tslint-config-seek"
}
```

You can override the settings from tslint-config-seek by editing the tslint.json file.

## License

MIT.
