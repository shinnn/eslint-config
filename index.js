module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    worker: true,
    serviceworker: true,
    es6: true
  },
  rules: {
    // Possible Errors: http://eslint.org/docs/rules/#possible-errors
    'no-await-in-loop': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': 'error',
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
    'no-unsafe-negation': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'no-unexpected-multiline': 'error',

    // Best Practices: http://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    complexity: [
      'error',
      12
    ],
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
        object: 'util',
        property: 'debug',
        message: 'Deprecated since Node v0.11.3 in favor of console.error().'
      },
      {
        object: 'util',
        property: 'error',
        message: 'Deprecated since Node v0.11.3 in favor of console.error().'
      },
      {
        object: 'util',
        property: 'isArray',
        message: 'Deprecated since Node v4.0.0 in favor of util.isArray().'
      },
      {
        object: 'util',
        property: 'isBoolean',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isBuffer',
        message: 'Deprecated since Node v4.0.0 in favor of Buffer.isBuffer().'
      },
      {
        object: 'util',
        property: 'isDate',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isError',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isFunction',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isNull',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isNullOrUndefined',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isNumber',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isObject',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isPrimitive',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isRegExp',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isString',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isSymbol',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'isUndefined',
        message: 'Deprecated since Node v4.0.0.'
      },
      {
        object: 'util',
        property: 'log',
        message: 'Deprecated since Node v6.0.0.'
      },
      {
        object: 'util',
        property: 'print',
        message: 'Deprecated since Node v0.11.3 in favor of console.log().'
      },
      {
        object: 'util',
        property: 'puts',
        message: 'Deprecated since Node v0.11.3 in favor of console.log().'
      },
      {
        object: 'util',
        property: '_extend',
        message: 'Deprecated since Node v6.0.0 in favor of Object.assign().'
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
    radix: 'error',
    'require-await': 'error',
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
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',

    // Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
    'handle-callback-err': 'error',
    'no-mixed-requires': [
      'error',
      true
    ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',

    // Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
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
        properties: 'always'
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
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'id-blacklist': [
      'error',
      'shit'
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
    'lines-around-directive': [
      'error',
      {
        before: 'never',
        after: 'always'
      }
    ],
    'max-lines': [
      'error',
      5000
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
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': [
      'error',
      'WithStatement'
    ],
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
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
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'never'
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
    'unicode-bom': [
      'error',
      'never'
    ],

    // ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
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
    'no-useless-rename': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
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
    ]
  }
};
