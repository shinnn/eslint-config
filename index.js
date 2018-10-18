'use strict';

const {basename, extname, join, resolve} = require('path');
const {renameSync} = require('fs');

const attempt = require('lodash/attempt');

const cachePath = join(__dirname, '.eslintcache');
const tmpCachePath = join(__dirname, '.tmp');

const hasRollupConfigModule = process.env.HAS_RCM !== undefined ? process.env.HAS_RCM === '1' : require('is-resolvable')('rollup-config-module', {
	paths: [resolve('node_modules')]
});

if (process.env.TRAVIS_OS_NAME === 'windows') {
	process.exit();
}

if (basename(process.argv[1], extname(process.argv[1])) === 'eslint' && !process.argv.includes('--stdin') && !process.env.ESLINT_RESPAWNED) {
	const {spawnSync} = require('child_process');

	attempt(renameSync, tmpCachePath, cachePath);

	const {status} = spawnSync(process.argv[0], [
		...new Set([
			process.argv[1],
			'--ext=js,mjs',
			...process.env.CI ? [] : [
				'--cache',
				`--cache-location=${cachePath}`,
				'--fix'
			],
			'--format=codeframe',
			...[
				'coverage',
				'dest',
				'dist',
				'**/fixture',
				'**/temp',
				'**/tmp',
				'vendor'
			].map(dir => `--ignore-pattern=${dir}*/**/*`),
			...hasRollupConfigModule ? ['--ignore-pattern=index.js'] : [],
			...process.argv.slice(2)
		])
	], {
		stdio: 'inherit',
		env: {
			...process.env,
			ESLINT_RESPAWNED: '1',
			HAS_RCM: hasRollupConfigModule ? '1' : '0'
		}
	});

	attempt(renameSync, cachePath, tmpCachePath);
	process.exit(status);
}

const fromPairs = require('lodash/fromPairs');

const {bin, files, module: moduleEntry, private: isPrivate} = attempt(require, resolve('package.json'));
const isNpmPackageModuleWithoutBrowserSupport = !hasRollupConfigModule && files && !moduleEntry && !isPrivate;

module.exports = {
	parserOptions: {
		ecmaVersion: 10,
		sourceType: 'module'
	},
	plugins: [
		'no-use-extend-native',
		'node',
		'promise'
	],
	env: {
		es6: true,
		node: true,
		...isNpmPackageModuleWithoutBrowserSupport ? {} : {
			browser: true,
			serviceworker: true,
			worker: true
		}
	},
	settings: {
		node: {
			allowModules: [
				'electron',
				'vscode'
			],
			...hasRollupConfigModule ? {tryExtensions: ['.js', '.json', '.mjs']} : {}
		}
	},
	rules: {
		// Possible Errors: http://eslint.org/docs/rules/#possible-errors
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': [
			'error',
			'all',
			{
				nestedBinaryExpressions: false
			}
		],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-misleading-character-class': 'error',
		'no-unsafe-negation': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'require-atomic-updates': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'no-unexpected-multiline': 'error',

		// Best Practices: http://eslint.org/docs/rules/#best-practices
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		'consistent-return': 'error',
		curly: 'error',
		'dot-notation': 'error',
		'dot-location': [
			'error',
			'property'
		],
		eqeqeq: 'error',
		'guard-for-in': 'error',
		'max-classes-per-file': [
			'error',
			15
		],
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': [
			'error',
			{
				boolean: false,
				number: true,
				string: true
			}
		],
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-global-assign': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-redeclare': [
			'error',
			{
				builtinGlobals: true
			}
		],
		'no-restricted-properties': [
			'error',
			{
				object: 'console',
				property: 'warn',
				message: 'It is just an alias for console.error().'
			},
			{
				object: '_',
				property: 'first',
				message: 'It is just an alias for _.head().'
			},
			{
				object: '_',
				property: 'each',
				message: 'It is just an alias for _.forEach().'
			},
			{
				object: '_',
				property: 'eachRight',
				message: 'It is just an alias for _.forEachRight().'
			},
			{
				object: '_',
				property: 'entries',
				message: 'It is just an alias for _.toPairs().'
			},
			{
				object: '_',
				property: 'entriesIn',
				message: 'It is just an alias for _.toPairsIn().'
			},
			{
				object: '_',
				property: 'extend',
				message: 'It is just an alias for _.assignIn().'
			},
			{
				object: '_',
				property: 'extendWith',
				message: 'It is just an alias for _.assignInWith().'
			},
			{
				object: '_',
				property: 'toJSON',
				message: 'It is just an alias for _.value().'
			},
			{
				object: '_',
				property: 'valueOf',
				message: 'It is just an alias for _.value().'
			}
		],
		'no-return-assign': [
			'error',
			'always'
		],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'error',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		radix: 'error',
		'require-unicode-regexp': 'error',
		'wrap-iife': [
			'error',
			'inside'
		],
		yoda: [
			'error',
			'never',
			{
				exceptRange: true
			}
		],

		// Variables: http://eslint.org/docs/rules/#variables
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': 'error',
		'no-shadow-restricted-names': 'error',
		'no-shadow': 'error',
		'no-undef-init': 'error',
		'no-undef': 'error',
		'no-unused-vars': [
			'error',
			{
				varsIgnorePattern: '^_$'
			}
		],
		'no-use-before-define': 'error',

		// Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
		'handle-callback-err': 'error',
		'no-mixed-requires': [
			'error',
			true
		],
		'no-buffer-constructor': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-exit': 'error',

		// Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
		'array-bracket-newline': [
			'error',
			{
				multiline: true
			}
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'block-spacing': 'error',
		'brace-style': [
			'error',
			'1tbs'
		],
		camelcase: [
			'error',
			{
				properties: 'always',
				allow: [
					/^npm_config_/u.source,
					/^npm_package_/u.source,
					'npm_execpath',
					'npm_lifecycle_event',
					'npm_node_execpath'
				]
			}
		],
		'comma-dangle': 'error',
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'function-paren-newline': 'error',
		'id-blacklist': [
			'error',
			'shit'
		],
		'implicit-arrow-linebreak': 'error',
		indent: [
			'error',
			'tab',
			{
				MemberExpression: 0,
				SwitchCase: 1
			}
		],
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': 'error',
		'line-comment-position': [
			'error',
			{
				position: 'above'
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'lines-between-class-members': 'error',
		'max-lines': [
			'error',
			5000
		],
		'max-lines-per-function': [
			'error',
			4500
		],
		'max-nested-callbacks': [
			'error',
			6
		],
		'max-params': [
			'error',
			4
		],
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: true
			}
		],
		'new-parens': 'error',
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 5
			}
		],
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 0
			}
		],
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-restricted-syntax': [
			'error',
			'WithStatement'
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true
			}
		],
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': [
			'error',
			'never'
		],
		'object-property-newline': [
			'error',
			{
				allowMultiplePropertiesPerLine: true
			}
		],
		'one-var': [
			'error',
			'never'
		],
		'operator-assignment': [
			'error',
			'always'
		],
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'never',
				prev: '*',
				next: 'directive'
			},
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*'
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'class'
			}
		],
		'prefer-object-spread': 'error',
		'quote-props': [
			'error',
			'as-needed',
			{
				numbers: true
			}
		],
		quotes: [
			'error',
			'single'
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		semi: [
			'error',
			'always'
		],
		'semi-style': 'error',
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': [
			'error',
			'always',
			{
				block: {
					markers: ['!'],
					exceptions: ['*'],
					balanced: true
				}
			}
		],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': [
			'error',
			'never'
		],

		// ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: true
			}
		],
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'constructor-super': 'error',
		'generator-star-spacing': [
			'error',
			'before'
		],
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true
			}
		],
		'prefer-const': 'error',
		'prefer-destructuring': [
			'error',
			{
				array: false
			}
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'symbol-description': 'error',
		'template-curly-spacing': [
			'error',
			'never'
		],
		'yield-star-spacing': [
			'error',
			{
				before: true,
				after: false
			}
		],

		// eslint-plugin-no-use-extend-native https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
		'no-use-extend-native/no-use-extend-native': 'error',

		// eslint-plugin-node https://github.com/mysticatea/eslint-plugin-node
		'node/no-extraneous-import': 'error',
		'node/no-extraneous-require': 'error',
		'node/no-missing-import': 'error',
		'node/no-missing-require': 'error',
		...isPrivate ? {} : {
			'node/no-unpublished-bin': 'error',
			'node/no-unpublished-import': 'error',
			'node/no-unpublished-require': 'error'
		},
		'node/process-exit-as-throw': 'error',
		'node/shebang': 'error',
		'node/no-deprecated-api': 'error',
		'node/prefer-global/buffer': 'error',
		'node/prefer-global/console': 'error',
		'node/prefer-global/process': 'error',
		'node/prefer-global/url-search-params': 'error',
		'node/prefer-global/url': 'error',

		// eslint-plugin-promise https://github.com/xjamundx/eslint-plugin-promise
		'promise/no-return-wrap': [
			'error',
			{
				allowReject: true
			}
		],
		'promise/no-return-in-finally': 'error',
		'promise/param-names': 'error',
		'promise/prefer-await-to-then': 'error',
		'promise/valid-params': 'error'
	},
	overrides: [
		{
			files: ['**/*.mjs'],
			rules: {
				strict: [
					'error',
					'never'
				]
			}
		}
	]
};

// https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html
const JXA_GLOBALS = [
	'$',
	'Application',
	'delay',
	'Library',
	'ObjectSpecifier',
	'ObjC',
	'Path',
	'Progress',
	'Ref'
];

module.exports.overrides.push({
	files: ['**/*jxa*{,/**/*}.js'],
	globals: fromPairs(JXA_GLOBALS.map(varName => [varName, false])),
	rules: {
		'new-cap': [
			module.exports.rules['new-cap'][0],
			{
				...module.exports.rules['new-cap'][1],
				capIsNewExceptions: [
					...JXA_GLOBALS.filter(varName => varName.charAt(0).match(/[A-Z]/u)),
					'URLWithString'
				],
				capIsNewExceptionPattern: /^\$\.(?:NS|CG)/u.source
			}
		],
		'no-unused-vars': [
			module.exports.rules['no-unused-vars'][0],
			{
				varsIgnorePattern: /^(?:_|run)$/u.source
			}
		]
	}
});

if (bin !== undefined) {
	module.exports.overrides.push({
		files: typeof bin === 'string' ? bin : Object.values(bin),
		rules: {
			'no-process-exit': 'off'
		}
	});
}

// https://github.com/shinnn/rollup-config-module
if (hasRollupConfigModule) {
	module.exports.overrides.push({
		files: ['index.mjs'],
		rules: {
			'require-unicode-regexp': 'off',
			'no-var': 'off',
			'object-shorthand': 'off',
			'prefer-arrow-callback': 'off',
			'prefer-const': 'off',
			'prefer-destructuring': 'off',
			'prefer-numeric-literals': 'off',
			'prefer-rest-params': 'off',
			'prefer-spread': 'off',
			'prefer-template': 'off'
		}
	});
}
