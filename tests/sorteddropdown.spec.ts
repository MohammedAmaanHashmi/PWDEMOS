import { test, expect, Locator } from "@playwright/test";

test("Sorted  dropdwon", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdownOptions: Locator = page.locator('#animals>option');
    //  console.log(await dropdownOptions.allTextContents());
    //  const dropdownOptions: Locator = page.locator('#colors>option');

    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());

    const originalList: String[] = [...optionsText];
    const sortedList: String[] = [...optionsText].sort();

    console.log("Original List: ", originalList)
    console.log("Sorted List: ", sortedList);

    expect(originalList).toEqual(sortedList);


    await page.waitForTimeout(5000);

});
