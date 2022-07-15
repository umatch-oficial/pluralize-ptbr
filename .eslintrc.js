module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/', '*.lock'],
  rules: {
    'prettier/prettier': 'error',
    eqeqeq: ['error', 'smart'],
  },
};
