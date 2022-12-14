import { test, expect } from '@playwright/test';

test("Expect the page to look the same", async ({page}) => {
    let maskLocator = page.locator('#total-balance')

    await page.goto('http://localhost:4200');
    await expect(page).toHaveScreenshot("homepage.png", { fullPage: true, maxDiffPixels: 100, mask: [ maskLocator ] });
});