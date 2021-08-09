
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/packages/'
  }),
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
    '.+\\.(css|scss|png|jpg|jpeg|svg)$': '<rootDir>/__mocks__/images.js'
  }
}
