// Unit tests for main.js

const { initialize, APP_VERSION, APP_NAME } = require('../../src/main');

describe('Main Application', () => {
  test('should have correct version', () => {
    expect(APP_VERSION).toBe('2.0.0');
  });

  test('should have correct name', () => {
    expect(APP_NAME).toBe('Complex Test App');
  });
});