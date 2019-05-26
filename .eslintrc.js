module.exports = {
  env: {
    browser: true,
    node: true,
  },

  parser: '@typescript-eslint/parser', // Specifies the ESLint parser

  extends: [
    'airbnb',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],

  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  rules: {
    'max-len': ['error', 120], // TODO: length 120
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/jsx-one-expression-per-line': ['<disabled>', { allow: 'none' | 'literal' | 'single-child' }],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', 'ts', 'tsx'] }]
  },

  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      'webpack': {
        'config': './config/webpack-common-config.js'
      }
  },
}
