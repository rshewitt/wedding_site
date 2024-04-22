import { defineConfig } from "cypress";

export default defineConfig({
    defaultCommandTimeout: 10000,
    e2e: {
        baseUrl: "http://localhost:3000",
        specPattern: "cypress/e2e/*.cy.ts",
    },
    videoCompression: false,
    screenshotOnRunFailure: false,
});
