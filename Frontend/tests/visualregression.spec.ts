import { JsonPipe } from '@angular/common';
import { test, expect } from '@playwright/test';

const accounts = '[{"id":"5289a241-4a94-4e7a-942e-e6be8cad9d56","name":"Mock Saving Account","type":"Savings","balance":125662.22},{"id":"747db1cf-581d-48e1-be94-99c8e212c356","name":"Mock Private Account","type":"CurrentAccount","balance":-1420.14}]'

test("Expect the page to look the same", async ({page}) => {

    // Stub API response
    await page.route("http://localhost:4000/accounts", route => route.fulfill({
        status: 200,
        body: accounts,
    }))

    let maskLocator = page.locator('#total-balance')

    await page.goto('http://localhost:4200');

    // Screenshot of full page
    await expect(page).toHaveScreenshot("homepage.png", {maxDiffPixels: 100, fullPage: true});

    // Screenshot of a single element
    await expect(page.locator(".list-group")).toHaveScreenshot("homepage-subpart.png")
});