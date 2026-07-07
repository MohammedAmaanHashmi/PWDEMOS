import { test, expect, Locator } from "@playwright/test";


test("Multi select dropdwon", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions: Locator = page.locator('#animals>option'); //having duplicates 
    //const dropdownOptions: Locator = page.locator('#colors>option'); //not having duplicates
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());

    const myset = new Set<string>(); //set - duplicate not allowed
    const duplicates: string[] = []; //array - duplicate allowed

    for (const text of optionsText) {
        if (myset.has(text)) {
            duplicates.push(text);
        }

        else {
            myset.add(text);
        }
    }

     console.log("Duplicate options are: ====>", duplicates);

    if (duplicates.length > 0) {
        console.log("duplicates options are found", duplicates);
    }
    else {
        console.log("No duplicate options are found...")
    }
    expect(duplicates.length).toBe(0);
    await page.waitForTimeout(5000);

});