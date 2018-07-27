# @shinnn/eslint-config

[![npm version](https://img.shields.io/npm/v/@shinnn%2feslint-config.svg)](https://www.npmjs.com/package/@shinnn/eslint-config)
[![Build Status](https://travis-ci.org/shinnn/eslint-config.svg?branch=master)](https://travis-ci.org/shinnn/eslint-config)

[shinnn](https://github.com/shinnn)'s [ESLint](https://eslint.org/) [sharable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for both [client-side](https://en.wikipedia.org/wiki/Client-side_scripting) and [Node.js](https://nodejs.org/)-based projects

## Features

* Enforce tab indents to save file size
* Support [ECMAScript 2019](http://2ality.com/2018/02/ecmascript-2019.html) features – [optional `catch` binding](https://github.com/tc39/proposal-optional-catch-binding) and [JSON superset](https://github.com/tc39/proposal-json-superset)
* [Target](https://eslint.org/docs/user-guide/command-line-interface#--ext) `.mjs` file extension by default to support [ECMAScript modules](https://nodejs.org/api/esm.html)
* [Automatically fix errors](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) without explicitly passing a `--fix` flag
  * On [CI](https://docs.travis-ci.com/user/getting-started) [environments](https://www.appveyor.com/), this feature is disabled in order to encourage fixing code locally.
  * Users still can manually disable it with `--no-fix` flag.
* Automatically ignore [generated files](https://github.com/shinnn/eslint-config/blob/v6.0.0/index.js#L592), for example paths under `coverage/`, `tmp/` and `dist/`
* Use a beautiful [codeframe](https://eslint.org/docs/user-guide/formatters/#codeframe) formatter by default
* [Cache results](https://eslint.org/docs/user-guide/command-line-interface#caching) by default to operate only on the changed files
* Allow CLI-friendly [`process.exit()`](https://nodejs.org/api/process.html#process_process_exit_code) to be used *only* inside [executables](https://docs.npmjs.com/files/package.json#bin)

## Installation

[Install](https://docs.npmjs.com/cli/install) [`eslint`](https://www.npmjs.com/package/eslint) and this package with [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install --dev eslint @shinnn/eslint-config
```

Then add the following configuration to your project's [`package.json`](https://docs.npmjs.com/files/package.json).

```json
"eslintConfig": {
  "extends": "@shinnn"
}
```

## CLI

```sh
# No need to explicitly add `--cache`, `--cache-location`, `--ext`, `--fix` and `--format` flags
$ eslint .
```

## API

```javascript
const {CLIEngine} = require('eslint');

const cli = new CLIEngine({
  // For programmatic usage via API and build tool integrations like webpack eslint-loader,
  // options for example `fix: true` and `cache: true` are still needed to set them explicitly.
});
cli.executeOnText('var foo=true;'); //=> {results: [ ... ], errorCount: ... }
```

## License

[ISC License](./LICENSE) © 2017 - 2018 Shinnosuke Watanabe
