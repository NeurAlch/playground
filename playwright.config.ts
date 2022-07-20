import { type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testDir: './src/tests/integration',
  testMatch: '*.ts',
  projects: [
    {
      use: {
        trace: 'on-first-retry',
        baseURL: 'http://localhost:8080',
        browserName: 'chromium',
        headless: true,
      },
    },
  ],
};

export default config;
