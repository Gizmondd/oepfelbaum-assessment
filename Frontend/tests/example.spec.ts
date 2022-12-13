import { test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('localhost:4200')
})

test('Accounts overview has a title and account link works', async ({ page }) => {

  // Check Title
  await expect(page).toHaveTitle('OepfelbaumAssessment');

  // Click on first account link
  let link = await page.locator('.list-group-item').first();
  await link.click();

  // Check new link
  await expect(page).toHaveURL(/account\/.*/)
});
