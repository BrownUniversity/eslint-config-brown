// https://github.com/flow-typed/eslint-plugin-ft-flow/blob/master/src/configs/babel-parser.json
module.exports = {
  extends: ["plugin:ft-flow/babel-parser"],
  rules: {
    "ft-flow/generic-spacing": "off",
    "ft-flow/require-valid-file-annotation": [2, "always"],
    "no-empty": [0, "always"],
    "react/prop-types": "off",
    "react/require-default-props": "off",
  },
  settings: {
    "ft-flow": {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
