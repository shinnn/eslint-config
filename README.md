# @shinnn/eslint-config

[![npm version](https://img.shields.io/npm/v/@shinnn%2feslint-config.svg)](https://www.npmjs.com/package/@shinnn/eslint-config)
[![Build Status](https://travis-ci.com/shinnn/eslint-config.svg?branch=master)](https://travis-ci.com/shinnn/eslint-config)
[![codecov](https://codecov.io/gh/shinnn/eslint-config/branch/master/graph/badge.svg)](https://codecov.io/gh/shinnn/eslint-config)

[shinnn](https://github.com/shinnn)'s [ESLint](https://eslint.org/) [sharable config](https://eslint.org/docs/developer-guide/shareable-configs.html)

## Features

* Enforce tab indents to save file size
* Support [ECMAScript 2019](http://2ality.com/2018/02/ecmascript-2019.html) features for example [optional `catch` binding](https://github.com/tc39/proposal-optional-catch-binding), and more [experimental](https://github.com/tc39/proposals) ones when [babel-eslint](https://www.npmjs.com/package/babel-eslint) is installed
* [Target](https://eslint.org/docs/user-guide/command-line-interface#--ext) `.cjs` and `.mjs` file extension by default to support [ECMAScript modules](https://nodejs.org/api/esm.html)
* [Automatically fix errors](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) without explicitly passing a `--fix` flag
  * On [CI](https://docs.travis-ci.com/user/getting-started) [environments](https://www.appveyor.com/), this feature is disabled in order to encourage fixing code locally.
  * Users still can manually disable it with `--no-fix` flag.
* Automatically ignore [generated files](https://github.com/shinnn/eslint-config/blob/v6.10.2/index.js#L10-L18), for example paths under `coverage/`, `tmp/` and `dist/`
* Use a beautiful [codeframe](https://eslint.org/docs/user-guide/formatters/#codeframe) formatter by default
* [Cache](https://eslint.org/docs/user-guide/command-line-interface#caching) results by default to operate only on the changed files
* Allow CLI-friendly [`process.exit()`](https://nodejs.org/api/process.html#process_process_exit_code) to be used *only* inside [executables](https://docs.npmjs.com/files/package.json#bin)
* Optional [Svelte](https://svelte.dev/) support

## Installation

[Install](https://docs.npmjs.com/cli/install) [`eslint`](https://www.npmjs.com/package/eslint) and this package with [npm](https://docs.npmjs.com/about-npm/).

```
npm install --save-dev eslint @shinnn/eslint-config
```

Then add the following configuration to your project's [`package.json`](https://docs.npmjs.com/files/package.json).

```json
"eslintConfig": {
  "extends": "@shinnn"
}
```

### Optional setups

#### [babel-eslint](https://github.com/sveltejs/svelte) utilization

When [`babel-eslint`](https://github.com/babel/babel-eslint) is installed, this config automatically uses it as a [parser](https://eslint.org/docs/user-guide/configuring#specifying-parser). There is no need to add `"parser": "babel-eslint"` to the `package.json` explicitly.

```
npm install --save-dev babel-eslint
```

`babel-eslint` lets ESLint parse experimental ECMAScript syntax the default parser doesn't support, for example [class fields](https://github.com/tc39/proposal-class-fields) and [`BigInt`](https://github.com/tc39/proposal-bigint).


#### [Svelte](https://github.com/sveltejs/svelte) support

When [`eslint-plugin-svelte3`](https://github.com/sveltejs/eslint-plugin-svelte3) is installed, this config also makes ESLint validate `.svelte` files.

```
npm install --save-dev eslint-plugin-svelte3
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
  // For programmatic usage via API and build tool integrations like Webpack eslint-loader,
  // options for example `fix: true` and `cache: true` are still needed to set them explicitly.
});
cli.executeOnText('var foo=true;'); //=> {results: [ ... ], errorCount: ... }
```

## License

[ISC License](./LICENSE) © 2017 - 2019 Watanabe Shinnosuke
