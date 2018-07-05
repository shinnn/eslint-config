# @shinnn/eslint-config

[![npm version](https://img.shields.io/npm/v/@shinnn%2feslint-config.svg)](https://www.npmjs.com/package/@shinnn/eslint-config)
[![Build Status](https://travis-ci.org/shinnn/eslint-config.svg?branch=master)](https://travis-ci.org/shinnn/eslint-config)

[shinnn](https://github.com/shinnn)'s [ESLint sharable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for both [client-side](https://en.wikipedia.org/wiki/Client-side_scripting) and [Node.js](https://nodejs.org/)-based projects

## Features

* Enforce tab indents to save file size
* Support ECMAScript 2019 features – [optional `catch` binding](https://github.com/tc39/proposal-optional-catch-binding) and [JSON superset](https://github.com/tc39/proposal-json-superset)
* Target `.mjs` file extension by default to support [ECMAScript modules](https://nodejs.org/api/esm.html)
* Automatically fix errors without explicitly passing a `--fix` flag
  * Users still can disable it with `--no-fix` flag.
* Use a beautiful [codeframe](https://eslint.org/docs/user-guide/formatters/#codeframe) formatter by default
* Automatically ignore [generated files](https://github.com/shinnn/eslint-config/blob/v6.0.0/index.js#L592), for example paths under `coverage/`, `tmp/` and `dist/`
* Allow CLI-friendly `process.exit()` to be used *only* inside [executables](https://docs.npmjs.com/files/package.json#bin)

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install @shinnn/eslint-config
```

Then, add

```json
"eslintConfig": {
  "extends": "@shinnn"
}
```

to your project's [`package.json`](https://docs.npmjs.com/files/package.json).

## CLI

```sh
# No need to add `--ext=js,mjs`, `--fix` and `--format=codeframe` flags explicitly
$ eslint .
```

## API

```javascript
const {CLIEngine} = require('eslint');

const cli = new CLIEngine({
  // In the API and build tool integrations for example webpack eslint-loader,
  // `fix: true` option is still needed unlike CLI if a user expects ESLint to fix code automatically.
});
cli.executeOnText('var foo=true;'); //=> {results: [ ... ], errorCount: ... }
```

## License

[ISC License](./LICENSE) © 2017 - 2018 Shinnosuke Watanabe
