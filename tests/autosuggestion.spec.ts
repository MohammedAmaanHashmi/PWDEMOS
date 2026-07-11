import { test, expect, Locator } from "@playwright/test";

test("Autosuggestion dropdown", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");

    await page.locator("span[role='button']").click();
    await page.locator("input[name='q']").first().fill("smart");
    await page.waitForTimeout(5000);
    //get all the suggested options --> ctrl+Shift+P --> emualted focused page
    const options: Locator = page.locator("ul>li");
    const count = await options.count();
    console.log("Number of suggest option:", count); //8


    //console.log("5th option", await options.nth(5).innerText());
    //console.log("5th option textcontent", await options.nth(5).textContent());

    // Printing all the suggested options in the console
    for (let i = 0; i < count; i++) {
        //   console.log(await options.nth(i).innerText());
        console.log(await options.nth(i).textContent());
    }
{
    const name:string="Amaan";
}
    const name:string="Hashmi";

    for (let i = 0; i < count; i++) {
        const text: string = await options.nth(i).innerText();
        if (text === "smartphone") {
            await options.nth(i).click();
            break;
        }
    }



    await page.waitForTimeout(3000);






});


test("Autosuggestion dropdown handling with alltextcontents method", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");

    await page.locator("span[role='button']").click();
    await page.locator("input[name='q']").first().fill("smart");
    await page.waitForTimeout(5000);
    //get all the suggested options --> ctrl+Shift+P --> emualted focused page
    const options: Locator = page.locator("ul>li");
    const count = await options.count();
    console.log("Number of suggest option:", count); //8

    const optionsText: string[] = (await options.allTextContents()).map(text => text.trim());

    for (let i = 1; i <= optionsText.length; i++) {

        if (optionsText[i] === 'smartphone') {
            await options.nth(i).click();
            break;
        }

    }

    await page.waitForTimeout(3000);

});