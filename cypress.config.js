const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      apiKey: 'reqres-free-v1'
    }
  }
});