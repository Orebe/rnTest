module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
        'no-console': [
            'error',
            {
                allow: ['log', 'error', 'warn'],
            },
        ],
        radix: 0,
        semi: ['error', 'never'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'max-len': 0,
        'no-shadow': 0,
        'default-param-last': 0,
        'react/prop-types': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-await-in-loop': 0,
        'no-restricted-syntax': 0,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unescaped-entities': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/function-component-definition': 0,
        'import/prefer-default-export': 0,
    },
}
