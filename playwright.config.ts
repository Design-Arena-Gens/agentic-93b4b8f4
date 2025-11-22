import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "npm run start -- --hostname 127.0.0.1 --port 3010",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    port: 3010
  },
  use: {
    baseURL: "http://127.0.0.1:3010",
    headless: true
  }
});
