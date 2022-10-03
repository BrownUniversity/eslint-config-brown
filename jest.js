// https://github.com/kentcdodds/eslint-config-kentcdodds/blob/main/jest.js
// https://github.com/jest-community/eslint-plugin-jest

module.exports = {
  extends: ["plugin:jest/recommended"],
  plugins: ["jest"],
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "jest/no-alias-methods": "off",
    "jest/no-large-snapshots": ["warn", { maxSize: 300 }],
    "jest/no-test-prefixes": "error",
    "jest/prefer-to-contain": "warn",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-describe-callback": "error",
    "jest/valid-title": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/consistent-test-it": "off",
    "jest/no-jasmine-globals": "off",
    "jest/no-done-callback": "off",
    "jest/expect-expect": "off",
    "jest/prefer-todo": "warn",
  },
  env: {
    "jest/globals": true,
  },
};
