const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  },
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://test-productcatalog.singlewindow.io/",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    watchForFileChanges: false,
    blockHosts:[
    ]
  },
});
