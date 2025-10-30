// jest.config.js
const config = {
  verbose: true,
  // transformIgnorePatterns: ['/node_modules/(?!jest-runtime)/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'] // For @testing-library/jest-dom
}

export default config
