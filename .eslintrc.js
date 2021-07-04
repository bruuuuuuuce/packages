// based off of https://github.com/matt-dunn/packages/blob/master/.eslintrc.js
module.exports =  {
    env: {
        es6: true,
        browser: true,
        jest: true,
        node: true
    },
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  "module",
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    parser:  "@typescript-eslint/parser",
    extends:  [
        "eslint:recommended",
        "plugin:jsx-a11y/strict"
    ],
    globals: {
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends:  [
                "plugin:@typescript-eslint/recommended",
            ],
            rules:  {
                "@typescript-eslint/member-delimiter-style": ["error", {
                    "multiline": {
                        "delimiter": "semi",
                        "requireLast": true
                    },
                    "singleline": {
                        "delimiter": "semi",
                        "requireLast": false
                    }
                }],
                "@typescript-eslint/semi": "error",
                "@typescript-eslint/no-unused-vars": "error",
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
    ],
};