/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  roots: ['<rootDir>/src/', '<rootDir>/libs/'],
  moduleNameMapper: {
    '^@(|/.*)$': '<rootDir>/src/$1',
    '^@app/aws(|/.*)$': '<rootDir>/libs/aws/src/$1',
    '^@libs/casper(|/.*)$': '<rootDir>/libs/casper/src/$1',
    '^@libs/woocommerce(|/.*)$': '<rootDir>/libs/woocommerce/src/$1',
  },
};
