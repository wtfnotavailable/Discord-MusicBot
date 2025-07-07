//@ts-check
import stylistic from '@stylistic/eslint-plugin';
import ts from 'typescript-eslint';

export default ts.config(
    {
        ignores: [
            '**/*.js',
            '**/*.cjs',
            '**/*.d.ts',
            '**/*.json',
            'node_modules/**/*',
            'assets/**/*',
        ],
    },
    {
        files: ['**/*.ts'],
        plugins: {
            '@stylistic': stylistic,
            '@typescript-eslint': ts.plugin,
        },

        languageOptions: {
            parser: ts.parser,
            ecmaVersion: 'latest',
            parserOptions: {
                tsconfigRootDir: '.',
                projectService: true,
            },
        },

        rules: {
            'array-callback-return': 'error',
            'constructor-super': 'error',
            'for-direction': 'error',
            'getter-return': 'error',
            'no-async-promise-executor': 'error',
            'no-await-in-loop': 'error',
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': 'error',
            'no-constant-binary-expression': 'error',
            'no-constant-condition': 'error',
            'no-constructor-return': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-dupe-else-if': 'error',
            'no-duplicate-case': 'error',
            'no-empty-character-class': 'error',
            'no-empty-pattern': 'error',
            'no-ex-assign': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-import-assign': 'error',
            'no-inner-declarations': 'error',
            'no-invalid-regexp': 'error',
            'no-misleading-character-class': 'error',
            'no-obj-calls': 'error',
            'no-promise-executor-return': 'error',
            'no-prototype-builtins': 'error',
            'no-self-assign': 'error',
            'no-self-compare': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-unexpected-multiline': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unsafe-optional-chaining': 'error',
            'no-unused-private-class-members': 'error',
            'no-useless-backreference': 'error',
            'require-atomic-updates': 'error',
            'use-isnan': 'error',
            'accessor-pairs': 'error',
            'grouped-accessor-pairs': 'error',
            'logical-assignment-operators': 'warn',
            'no-array-constructor': 'error',
            'no-delete-var': 'error',
            'no-div-regex': 'warn',
            'no-else-return': 'error',
            'no-empty-static-block': 'error',
            'no-eval': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-boolean-cast': 'warn',
            'no-global-assign': 'error',
            'no-iterator': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'warn',
            'no-multi-str': 'error',
            'no-new': 'error',
            'no-nonoctal-decimal-escape': 'warn',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            'no-proto': 'error',
            'no-regex-spaces': 'warn',
            'no-return-assign': 'error',
            'no-sequences': 'error',
            'no-shadow-restricted-names': 'error',
            'no-underscore-dangle': 'error',
            'no-unneeded-ternary': 'warn',
            'no-unused-labels': 'warn',
            'no-useless-call': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': 'warn',
            'no-useless-concat': 'error',
            'no-useless-escape': 'error',
            'no-useless-rename': 'error',
            'no-var': 'error',
            'no-void': 'error',
            'no-with': 'error',
            'operator-assignment': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'warn',
            curly: ['error', 'multi-or-nest'],

            eqeqeq: [
                'error',
                'always',
                {
                    null: 'ignore',
                },
            ],

            'func-style': ['error', 'declaration'],

            'no-empty': [
                'error',
                {
                    allowEmptyCatch: true,
                },
            ],

            'one-var': ['error', 'never'],

            'prefer-const': [
                'error',
                {
                    destructuring: 'all',
                },
            ],

            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/ban-ts-comment': 'error',
            '@typescript-eslint/consistent-generic-constructors': 'error',
            '@typescript-eslint/consistent-indexed-object-style': 'warn',
            '@typescript-eslint/consistent-type-exports': 'warn',
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/default-param-last': 'error',
            '@typescript-eslint/dot-notation': 'warn',
            '@typescript-eslint/explicit-member-accessibility': 'warn',
            '@typescript-eslint/method-signature-style': 'warn',
            '@typescript-eslint/no-array-constructor': 'warn',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
            '@typescript-eslint/no-confusing-void-expression': 'warn',
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            '@typescript-eslint/no-duplicate-type-constituents': 'error',
            '@typescript-eslint/no-dynamic-delete': 'error',
            '@typescript-eslint/no-extra-non-null-assertion': 'warn',
            '@typescript-eslint/no-extraneous-class': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/no-loop-func': 'error',
            '@typescript-eslint/no-loss-of-precision': 'error',
            '@typescript-eslint/no-meaningless-void-operator': 'warn',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-mixed-enums': 'error',
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-non-null-asserted-nullish-coalescing':
                'error',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-redundant-type-constituents': 'error',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-restricted-imports': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
            '@typescript-eslint/no-unnecessary-qualifier': 'warn',
            '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
            '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
            '@typescript-eslint/no-unnecessary-type-constraint': 'error',
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-declaration-merging': 'error',
            '@typescript-eslint/no-unsafe-enum-comparison': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-unary-minus': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-useless-constructor': 'error',
            '@typescript-eslint/no-useless-empty-export': 'warn',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/non-nullable-type-assertion-style': 'error',
            '@typescript-eslint/parameter-properties': 'error',
            '@typescript-eslint/prefer-destructuring': 'warn',
            '@typescript-eslint/prefer-function-type': 'warn',
            '@typescript-eslint/prefer-includes': 'warn',
            '@typescript-eslint/prefer-literal-enum-member': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-readonly': 'warn',
            '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
            '@typescript-eslint/prefer-regexp-exec': 'warn',
            '@typescript-eslint/prefer-ts-expect-error': 'warn',
            '@typescript-eslint/promise-function-async': 'warn',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            '@typescript-eslint/triple-slash-reference': 'error',
            '@typescript-eslint/unified-signatures': 'error',

            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                },
            ],

            '@typescript-eslint/no-empty-function': [
                'error',
                {
                    allow: [
                        'private-constructors',
                        'protected-constructors',
                        'decoratedFunctions',
                    ],
                },
            ],

            '@typescript-eslint/no-empty-interface': [
                'warn',
                {
                    allowSingleExtends: true,
                },
            ],

            '@typescript-eslint/no-floating-promises': [
                'error',
                {
                    ignoreIIFE: true,
                },
            ],

            '@typescript-eslint/no-inferrable-types': [
                'warn',
                {
                    ignoreParameters: true,
                    ignoreProperties: true,
                },
            ],

            '@typescript-eslint/no-invalid-void-type': [
                'error',
                {
                    allowInGenericTypeArguments: true,
                    allowAsThisParameter: true,
                },
            ],

            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],

            '@typescript-eslint/no-unnecessary-condition': [
                'warn',
                {
                    allowConstantLoopConditions: true,
                },
            ],

            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowTaggedTemplates: true,
                    allowShortCircuit: true,
                },
            ],

            '@typescript-eslint/no-use-before-define': [
                'error',
                {
                    functions: false,
                    classes: false,
                },
            ],

            '@typescript-eslint/require-array-sort-compare': [
                'error',
                {
                    ignoreStringArrays: true,
                },
            ],

            '@typescript-eslint/strict-boolean-expressions': [
                'warn',
                {
                    allowAny: true,
                    allowNullableString: true,
                    allowNullableNumber: true,
                    allowNullableBoolean: true,
                },
            ],

            '@typescript-eslint/unbound-method': [
                'error',
                {
                    ignoreStatic: true,
                },
            ],

            '@stylistic/arrow-parens': 'warn',
            '@stylistic/arrow-spacing': 'warn',
            '@stylistic/block-spacing': 'warn',
            '@stylistic/comma-dangle': 'off',
            '@stylistic/comma-spacing': 'warn',
            '@stylistic/comma-style': 'warn',
            '@stylistic/computed-property-spacing': 'warn',
            '@stylistic/eol-last': 'warn',
            '@stylistic/function-call-spacing': 'warn',
            '@stylistic/jsx-quotes': 'warn',
            '@stylistic/key-spacing': 'warn',
            '@stylistic/linebreak-style': 'warn',
            '@stylistic/new-parens': 'warn',
            '@stylistic/no-confusing-arrow': 'warn',
            '@stylistic/no-extra-parens': 'off',
            '@stylistic/no-extra-semi': 'warn',
            '@stylistic/no-floating-decimal': 'warn',
            '@stylistic/no-mixed-operators': 'warn',
            '@stylistic/no-mixed-spaces-and-tabs': 'warn',
            '@stylistic/no-multi-spaces': 'warn',
            '@stylistic/no-tabs': 'warn',
            '@stylistic/no-trailing-spaces': 'warn',
            '@stylistic/no-whitespace-before-property': 'warn',
            '@stylistic/padding-line-between-statements': 'warn',
            '@stylistic/rest-spread-spacing': 'warn',
            '@stylistic/semi': 'warn',
            '@stylistic/semi-spacing': 'warn',
            '@stylistic/semi-style': 'warn',
            '@stylistic/space-before-blocks': 'warn',
            '@stylistic/space-in-parens': 'warn',
            '@stylistic/space-infix-ops': 'warn',
            '@stylistic/switch-colon-spacing': 'warn',
            '@stylistic/template-curly-spacing': 'warn',
            '@stylistic/type-annotation-spacing': 'warn',
            '@stylistic/wrap-regex': 'warn',

            '@stylistic/array-bracket-newline': [
                'warn',
                {
                    multiline: true,
                },
            ],

            '@stylistic/array-bracket-spacing': [
                'warn',
                'never',
                {
                    objectsInArrays: true,
                },
            ],

            '@stylistic/array-element-newline': ['warn', 'consistent'],

            '@stylistic/brace-style': [
                'warn',
                '1tbs',
                {
                    allowSingleLine: true,
                },
            ],

            '@stylistic/dot-location': ['warn', 'property'],
            '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
            '@stylistic/function-paren-newline': [
                'warn',
                'multiline-arguments',
            ],
            '@stylistic/generator-star-spacing': ['warn', 'after'],

            '@stylistic/indent': [
                'warn',
                4,
                {
                    SwitchCase: 1,
                },
            ],

            '@stylistic/keyword-spacing': [
                'error',
                {
                    before: true,
                    after: true,
                },
            ],

            '@stylistic/lines-between-class-members': [
                'warn',
                'always',
                {
                    exceptAfterSingleLine: true,
                },
            ],

            '@stylistic/max-len': [
                'error',
                {
                    code: 300,
                },
            ],

            '@stylistic/max-statements-per-line': [
                'error',
                {
                    max: 2,
                },
            ],

            '@stylistic/member-delimiter-style': [
                'warn',
                {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true,
                    },

                    singleline: {
                        delimiter: 'comma',
                        requireLast: false,
                    },

                    overrides: {
                        interface: {
                            multiline: {
                                delimiter: 'semi',
                                requireLast: true,
                            },

                            singleline: {
                                delimiter: 'semi',
                                requireLast: false,
                            },
                        },
                    },

                    multilineDetection: 'brackets',
                },
            ],

            '@stylistic/multiline-ternary': ['warn', 'always-multiline'],

            '@stylistic/newline-per-chained-call': [
                'warn',
                {
                    ignoreChainWithDepth: 4,
                },
            ],

            '@stylistic/no-multiple-empty-lines': [
                'warn',
                {
                    max: 1,
                },
            ],

            '@stylistic/nonblock-statement-body-position': [
                'warn',
                'beside',
                {
                    overrides: {
                        while: 'any',
                        if: 'any',
                        else: 'any',
                    },
                },
            ],

            '@stylistic/object-curly-newline': [
                'warn',
                {
                    consistent: true,
                    multiline: true,
                },
            ],

            '@stylistic/object-curly-spacing': ['warn', 'always'],

            '@stylistic/object-property-newline': [
                'warn',
                {
                    allowAllPropertiesOnSameLine: true,
                },
            ],

            '@stylistic/operator-linebreak': [
                'warn',
                'none',
                {
                    overrides: {
                        '?': 'ignore',
                        ':': 'ignore',
                        '||': 'after',
                        '&&': 'after',
                        '=': 'after',
                        '===': 'after',
                    },
                },
            ],

            '@stylistic/padded-blocks': ['warn', 'never'],
            '@stylistic/quote-props': ['warn', 'as-needed'],

            '@stylistic/quotes': [
                'warn',
                'single',
                {
                    avoidEscape: true,
                },
            ],

            '@stylistic/space-before-function-paren': [
                'warn',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],

            '@stylistic/space-unary-ops': [
                'warn',
                {
                    words: true,
                    nonwords: false,
                },
            ],

            '@stylistic/template-tag-spacing': ['warn', 'never'],
            '@stylistic/wrap-iife': ['warn', 'any'],
            '@stylistic/yield-star-spacing': ['warn', 'after'],
        },
    }
);
