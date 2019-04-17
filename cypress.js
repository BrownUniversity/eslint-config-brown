// https://github.com/cypress-io/eslint-plugin-cypress
module.exports = {
  extends: ["plugin:cypress/recommended"],
  plugins: ["cypress"],
  env: {
    "cypress/globals": true
  }
};
