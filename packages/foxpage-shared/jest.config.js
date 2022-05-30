const { join } = require('path');

/** @type {jest.ProjectConfig} */
const config = {
  rootDir: __dirname,
  name: 'foxpage-shared',
  displayName: 'foxpage-shared',
  // setupFiles: ['<rootDir>/config/jest/setup.ts'],
  testRegex: 'test/.*\\.(test|spec)\\.(ts|tsx)$',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: join(__dirname, 'tsconfig.test.json')
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/test/$1',
  },
};

module.exports = config;
