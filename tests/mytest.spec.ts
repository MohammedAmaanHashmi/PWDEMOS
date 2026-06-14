import { test, expect } from "@playwright/test";

//syntax
/* 
test("title", () => {

    //Step1 


}); */

//fixture - global variable page, browser

test("Verify the title of the page", async ({ page }) => {

    await page.goto("http://www.automationpractice.pl/index.php");
    let title: string = await page.title();
    console.log("Title: ", title);
    await expect(page).toHaveTitle("My shop ");


});