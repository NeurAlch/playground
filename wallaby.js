module.exports = function () {
  return {
    files: ['src/**/*.ts', '!src/tests/**/*.test.ts'],
    tests: ['src/tests/**/*.test.ts'],
    env: {
      type: 'node',
    },
    testFramework: 'jasmine',
  };
};
