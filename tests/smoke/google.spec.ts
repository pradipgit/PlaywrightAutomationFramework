import { test } from '../../fixtures/testFixtures';
import { expect } from '@playwright/test';


test('Search in google', async ({ loginPage, page }) => {
  await page.goto('/');
  await loginPage.searchInGoogle('Playwright');
  await expect(page.getByText('Playwright')).toBeVisible();

  await page.pause();
});

