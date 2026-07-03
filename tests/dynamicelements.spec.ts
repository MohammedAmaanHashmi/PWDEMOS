import { test, expect, Locator } from "@playwright/test";

//using xpath
test("Handle Dynamic Elements using xpath", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com");


    for (let i = 1; i <= 5; i++) {
        let button: Locator = page.locator("//button[@name='start' or @name='stop']");
        await button.click();



        await page.waitForTimeout(2000);
    }

});


//using css selectors

test("Handle Dynamic Elements using css selector", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");


    for (let i = 1; i <= 5; i++) {
        let button: Locator = page.locator("button[name='stop'], [name='start']");
        await button.click();

        await page.waitForTimeout(2000);
    }

});

//using playwright specific locators

test("Handle Dynamic Elements using playwright locators", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");


    for (let i = 1; i <= 5; i++) {
        let button: Locator = page.getByRole('button', { name: /START|STOP/ });
        await button.click();
        await page.waitForTimeout(2000);
    }


});