module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "./airbnb/index",
    "./airbnb/react-overrides",
    "./airbnb/style-overrides",
  ].map(require.resolve),
};
