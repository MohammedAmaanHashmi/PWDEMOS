import { test, expect, Locator } from "@playwright/test";


test("Single select Drop down", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1) select option from the drop down (4 ways)
    //await page.locator('#country').selectOption("India"); //visible text
    // await page.locator('#country').selectOption({ value: 'uk' }); // by using value attribute
    //await page.locator('#country').selectOption({ label: 'India' }); // by using label
    //await page.locator('#country').selectOpt
    // ion({ index: 1 }); // by using index

    //2) check number of options in the dropdwon(count)
    const dropDownOptions: Locator = page.locator('#country>option');
    await expect(dropDownOptions).toHaveCount(10);


    //3) check an option pressent in the dropdown
    const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
    console.log(optionsText);

    expect(optionsText).toContain("Japan"); //Check if the array contains "Japan"

    //4) printing options from the drop down
    for (const option of optionsText) {
        console.log(optionsText);
    }


    // await page.waitForTimeout(5000)
});