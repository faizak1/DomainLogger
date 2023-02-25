module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(m)?js$',
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      'src/**/*.js',
    ],
  };