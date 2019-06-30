/* eslint-disable no-process-exit */
'use strict';

const {inspect} = require('util');
const {join} = require('path');
const {once} = require('events');
const {spawn} = require('child_process');
const {writeFile} = require('fs').promises;

const {cyan, red} = require('chalk');
const difference = require('lodash/difference');
const ora = require('ora');
const unconfiguredESLintRules = require('unconfigured-eslint-rules');

const eslintPath = require.resolve('eslint/bin/eslint.js');

async function runEslint(dir, {args, CI, travisCiWindows} = {}) {
	const spinner = ora(`Running ESLint in ${
		cyan(dir)
	}${
		args ? ' with additional flags' : ''
	}${
		CI ? ' on CI' : ''
	}${
		travisCiWindows ? ' on Travis CI Windows build' : ''
	}`).start();
	const [code] = await once(spawn(process.execPath, [eslintPath, ...args || ['.']], {
		cwd: join(__dirname, dir),
		env: {
			...process.env,
			...CI ? {CI: 'True'} : {CI: ''},
			...travisCiWindows ? {TRAVIS_OS_NAME: 'windows'} : {}
		},
		...CI ? {} : {stdio: 'inherit'}
	}), 'exit');

	if (code !== 0) {
		if (CI !== true) {
			spinner.fail();
			process.exit(code);
		}
	} else if (CI) {
		spinner.fail('Autofixing is unexpectedly enabled on CI.');
		process.exit(1);
	}

	spinner.succeed();
}

(async () => {
	await runEslint('./fixtures/');
	await runEslint('./fixtures-single-cli/');
	await runEslint('./fixtures-multiple-cli/');
	await runEslint('./fixtures-rollup-config-module/');
	await runEslint('./fixtures-svelte/');

	await runEslint('./fixtures-fix/', {CI: false});

	await writeFile(join(__dirname, 'fixtures-fix', 'index.js'), 'console.log(1 );\n');
	await runEslint('./fixtures-fix/', {args: [
		'--ext=.js',
		'--no-cache',
		'--no-fix',
		'--format=compact',
		'--no-ignore',
		'.eslintrc.js'
	]});
	await runEslint('./fixtures-fix/', {CI: true});
	await runEslint('./fixtures-fix/', {travisCiWindows: true});

	const spinner = ora('Checking if the rules are configured as you expected');

	const explicitlyUnconfigured = [
		// Possible Errors: http://eslint.org/docs/rules/#possible-errors
		'no-console',
		'no-continue',

		// Best Practices: http://eslint.org/docs/rules/#best-practices
		'complexity',
		'default-case',
		'no-empty-function',
		// because 'no-labels' is already enabled
		'no-extra-label',
		'no-invalid-this',
		'no-magic-numbers',
		'no-new',
		'no-param-reassign',
		'no-process-env',
		'no-sequences',
		'vars-on-top',
		// because 'no-labels' is already enabled
		'no-unused-labels',
		'require-await',

		// Strict Mode: http://eslint.org/docs/rules/#strict-mode
		'strict',

		// Variables: http://eslint.org/docs/rules/#variables
		'no-undefined',
		'init-declarations',

		// Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
		'callback-return',
		'global-require',
		'no-restricted-imports',
		'no-restricted-modules',
		'no-sync',

		// Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
		'array-element-newline',
		'capitalized-comments',
		'consistent-this',
		'func-name-matching',
		'func-names',
		'func-style',
		'id-length',
		'id-match',
		'lines-around-comment',
		'max-depth',
		'max-len',
		'max-statements',
		'multiline-comment-style',
		'multiline-ternary',
		'no-bitwise',
		'no-inline-comments',
		'no-mixed-operators',
		'no-negated-condition',
		'no-plusplus',
		'no-ternary',
		// because 'curly' is enabled
		'nonblock-statement-body-position',
		'object-curly-newline',
		// because 'one-var' is already disallowed
		'one-var-declaration-per-line',
		'sort-keys',
		'sort-vars',
		'sort-imports',
		'wrap-regex',

		// ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
		'no-confusing-arrow'
	];
	const actuallyUnconfigured = unconfiguredESLintRules({configFile: require.resolve('..')});
	const unexpected = {
		unconfigured: difference(actuallyUnconfigured, explicitlyUnconfigured),
		configured: difference(explicitlyUnconfigured, actuallyUnconfigured)
	};

	for (const [key, rules] of Object.entries(unexpected)) {
		if (rules.length === 0) {
			continue;
		}

		spinner.fail();
		console.error(red(`These rules are unexpectedly ${key}:\n${inspect(rules, {breakLength: 0})}`));

		process.exit(1);
	}

	spinner.succeed();
})();
