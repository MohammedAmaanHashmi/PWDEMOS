import { test, expect, Locator } from "@playwright/test";

test("Bootstrap hidden dropdown", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //login steps
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[name='password']").fill("admin123")
    await page.locator("button[type='submit']").click();



    //click on the PIM
    await page.getByText("PIM").click();

    //click on Job Title Dropdwon
    await page.locator("form i").nth(2).click();

    const listBox: Locator = page.locator("div[role='listbox'] span").first();
    await listBox.waitFor({ state: "visible", timeout: 10000 });

    //capture all the options from dropdown
    const options: Locator = page.locator("div[role='listbox'] span");
    // await page.waitForTimeout(3000);
    const count: number = await options.count();
    console.log("Number of options in a dropdwon:", count);

    // Print all the options
    console.log(await options.allTextContents());


    console.log("Printing all the options.....")
    for (let i = 0; i < count; i++) {
        // console.log(await options.nth(i).innerText());
        console.log(await options.nth(i).textContent());
    }

    //select and click option
    for (let i = 0; i < count; i++) {

        const text: string = await options.nth(i).innerText();
        if (text === "Automaton Tester") {
            options.nth(i).click();
            break;
        }

    }
    
});