import { test, expect, Locator } from "@playwright/test";


test("Multi select dropdwon", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1) select option from the drop down (4 ways)
    // await page.locator("#colors").selectOption(["Red", "Blue", "Green"]); //using visible text
    //await page.locator("#colors").selectOption(["red", "green", "white"]); //using value attribute
    // await page.locator("#colors").selectOption([{ label: "red" }, { label: "green" }, { label: "white" }]); //using label
    // await page.locator("#colors").selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]); //using index

    //2) check number of options in the dropdwon(count)
    const dropDownLocator: Locator = page.locator("#colors>option");
    await (expect(dropDownLocator)).toHaveCount(7);

    //3) check an option pressent in the dropdown
    const optionsText: string[] = (await dropDownLocator.allTextContents()).map(text => text.trim());
    console.log(optionsText);
    expect(optionsText).toContain("Green"); //Check if the array contain "Green";

    //4) printing options from the drop down

    for (const option of optionsText) {
        console.log(option);
    }

    await page.waitForTimeout(5000);

});