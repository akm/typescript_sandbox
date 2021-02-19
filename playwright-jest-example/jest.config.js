module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    `${process.cwd()}/jest.setup.js`
  ],
  // https://github.com/facebook/jest/tree/master/packages/jest-circus
  "testRunner": "jest-circus/runner",
}
