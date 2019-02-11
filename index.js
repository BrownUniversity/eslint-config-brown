module.exports = {
  parser: 'babel-eslint',
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/prettier'
  ].map(require.resolve),
  rules: {
    strict: 'error'
  }
};
