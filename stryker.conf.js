module.exports = {
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
    jest: {
      config: require('./jest.config.js'),
    },
    mutate: ['src/triangulo.ts'],
  };