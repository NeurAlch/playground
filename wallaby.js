module.exports = function (w) {
  return {
    files: [
      'src/**/*.ts',
    ],
    tests: [
      'src/tests/unit-tests/**/*.test.ts',
    ],
    env: {
      type: 'node',
    },
    testFramework: 'jasmine',
  };
};
