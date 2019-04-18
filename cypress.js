// https://github.com/cypress-io/eslint-plugin-cypress
module.exports = {
  extends: ["plugin:cypress/recommended"],
  plugins: ["cypress", "chai-friendly"],
  rules: {
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2
  },
  env: {
    "cypress/globals": true
  }
};
