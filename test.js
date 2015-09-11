/* eslint-disable no-process-exit */
'use strong';

const spawn = require('child_process').spawn;

const arrayDiffer = require('array-differ');
const chalk = require('chalk');
const stringifyObject = require('stringify-object');
const unconfiguredESLintRules = require('unconfigured-eslint-rules');

const configId = require('./package.json').name;

spawn('node', ['node_modules/eslint/bin/eslint.js', '--config', configId, '.'], {stdio: 'inherit'})
.on('exit', function(code) {
  if (code !== 0) {
    process.exit(code);
  }

  console.log(chalk.green('[PASSED] ') + 'Rules are configured as you expected.');

  const explicitlyUnconfigured = [
    // Possible Errors: http://eslint.org/docs/rules/#possible-errors
    'no-continue',
    'valid-jsdoc',

    // Best Practices: http://eslint.org/docs/rules/#best-practices
    'default-case',
    'no-invalid-this',
    'no-new',
    'no-param-reassign',
    'no-process-env',
    'no-sequences',
    'vars-on-top',

    // Strict Mode: http://eslint.org/docs/rules/#strict-mode
    'strict',

    // Variables: http://eslint.org/docs/rules/#variables
    'no-undefined',
    'init-declarations',

    // Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
    'callback-return',
    'no-restricted-modules',
    'no-sync',

    // Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
    'func-names',
    'func-style',
    'id-length',
    'consistent-this',
    'lines-around-comment',
    'newline-after-var',
    'no-inline-comments',
    'no-ternary',
    'id-match',
    'sort-vars',
    'wrap-regex',

    // ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
    'no-var',
    'object-shorthand',
    'prefer-arrow-callback',
    'prefer-const',
    'prefer-spread',
    'prefer-reflect',
    'prefer-template',

    // Legacy: http://eslint.org/docs/rules/#legacy
    'max-depth',
    'max-len',
    'max-params',
    'max-statements',
    'no-bitwise',
    'no-plusplus'
  ];
  const actuallyUnconfigured = unconfiguredESLintRules({configFile: configId});
  const unexpectedlyUnconfigured = arrayDiffer(actuallyUnconfigured, explicitlyUnconfigured);

  if (unexpectedlyUnconfigured.length !== 0) {
    console.error(
      chalk.red('[FAILED] ') + '\n' +
      'These rules are unexpectedly unconfigured:\n' +
      stringifyObject(unexpectedlyUnconfigured, {indent: '  '})
    );
    process.exit(1);
  }
  console.log(chalk.green('[PASSED] ') + 'No rules are unexpectedly unconfigured.');
});
