const { defineConfig } = require("cypress");
const env = require("./cypress/config/cypress.env.json");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: env.baseUrl,
    video: false,
  },
});
