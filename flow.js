// https://github.com/gajus/eslint-plugin-flowtype
module.exports = {
  extends: ["plugin:flowtype/recommended"],
  plugins: ["flowtype"],
  rules: {
    "flowtype/generic-spacing": "off",
    "flowtype/require-valid-file-annotation": [2, "always"],
    "no-empty": [0, "always"],
    "react/require-default-props": "off"
  }
};
