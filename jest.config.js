// jest.config.js
const config = {
  verbose: true,
  transformIgnorePatterns: ['/node_modules/(?!your-problematic-package-name)/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'] // For @testing-library/jest-dom
}

export default config
