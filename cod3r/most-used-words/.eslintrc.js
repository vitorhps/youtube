module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    radix: 'off',
    'no-param-reassign': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': 'off',
  },
};
