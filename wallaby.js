module.exports = function (w) {
  return {
    files: [
      'src/tasks/**/*.ts',
      'src/server/**/*.ts',
      'src/shared/**/*.ts',
      'src/client/views/**/*.ts',
      'src/client/components/**/*.ts',
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
