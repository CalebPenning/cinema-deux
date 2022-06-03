const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1'
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['cypress/']
}

module.exports = createJestConfig(customJestConfig)