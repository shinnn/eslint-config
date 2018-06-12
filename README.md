# @shinnn/eslint-config

[![npm version](https://img.shields.io/npm/v/@shinnn%2feslint-config.svg)](https://www.npmjs.com/package/@shinnn/eslint-config)
[![Build Status](https://travis-ci.org/shinnn/eslint-config.svg?branch=master)](https://travis-ci.org/shinnn/eslint-config)

[shinnn](https://github.com/shinnn)'s [ESLint sharable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for both [client-side](https://en.wikipedia.org/wiki/Client-side_scripting) and [Node.js](https://nodejs.org/)-based projects

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install @shinnn/eslint-config
```

## CLI

```
eslint --config @shinnn .
```

## API

```javascript
const {CLIEngine} = require('eslint');

const cli = new CLIEngine({configFile: '@shinnn'});
cli.executeOnText('var foo=true;'); //=> {results: [ ... ], errorCount: ... }
```

## License

[ISC License](./LICENSE) © 2017 - 2018 Shinnosuke Watanabe
