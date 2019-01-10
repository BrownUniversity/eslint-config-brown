// https://github.com/kentcdodds/eslint-config-kentcdodds/blob/master/jest.js
module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/no-test-prefixes': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/consistent-test-it': 'off',
    'jest/lowercase-name': 'off',
    'jest/no-hooks': 'off',
    'jest/no-jasmine-globals': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-to-be-null': 'off',
    'jest/prefer-to-be-undefined': 'off',
    'jest/expect-expect': 'off',
    'jest/no-test-return-statement': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-strict-equal': 'off'
  },
  env: {
    'jest/globals': true
  }
};
