import { test, expect } from "@playwright/test";

//syntax
/* 
test("title", () => {

    //Step1 


}); */

//fixture - global variable page, browser

test("Verify the url of the page", async ({ page }) => {

    await page.goto("http://www.automationpractice.pl/index.php");
    let url: string = await page.url();
    console.log("Url: ", url);
    await expect(page).toHaveURL("/automationpractice/");


});