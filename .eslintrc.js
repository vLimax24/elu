module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'react',
        'react-native',
        '@typescript-eslint',
        'import',
        'jsx-a11y',
    ],
    env: {
        'react-native/react-native': true,
        browser: true,
        node: true,
        es6: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // General rules
        'no-unused-vars': 'warn',
        'no-console': 'warn',

        'prettier/prettier': 'error', // Treat Prettier issues as ESLint errors

        // TypeScript specific rules
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // React specific rules
        'react/prop-types': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: true,
            },
        ],

        // React Native specific rules
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'off', // You can enable this if you want to strictly avoid inline styles
        'react-native/no-color-literals': 'off',

        // Accessibility rules for React Native
        'jsx-a11y/accessible-emoji': 'warn',
    },
};
