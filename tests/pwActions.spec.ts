import { test, expect, Locator } from "@playwright/test";

// Text input /Text Box/ Input Box
test("Text input Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    // const textBox: Locator = page.getByRole('textbox', { name: 'Enter Name' });
    const textBox: Locator = page.locator('#name');
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    const maxlength: string | null = await textBox.getAttribute('maxlength');  //Returns value of maxlength attribute of the element
    expect(maxlength).toBe("15");
    await textBox.fill("John canedy");
    //console.log("text content of the first name:", await textBox.textContent()); //returns empty
    const enterValue: string = await textBox.inputValue();
    console.log("text content of the first name:", enterValue); //returns the input value of the textbox
    expect(enterValue).toBe("John canedy");

    await page.waitForTimeout(3000);


});


test("Radio button actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio: Locator = page.getByRole('radio', { name: 'Male', exact: true })//Male radio button
    await (expect(maleRadio).toBeVisible());
    await (expect(maleRadio).toBeEnabled());
    expect(await maleRadio.isChecked()).toBe(false);
    await maleRadio.check(); //select radio button
    expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked(); //preferrable

    await page.waitForTimeout(3000);
});

test.only("checkboxes actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. Select specific checkbox (Sunday) using getByLabel and assert
    const sundayCheckBox: Locator = page.getByLabel('Sunday');
    // await sundayCheckBox.check();
    // await expect(sundayCheckBox).toBeChecked();

    //2. select all checkboxes and assert each is checked
    const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);


    /*

    //3. select all checkboxes and assert each is checked
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    await page.waitForTimeout(3000);

    //4. check the last 3 checkboxes and assert
    for (const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck();
        expect(checkbox).not.toBeChecked();
    }

    await page.waitForTimeout(3000);

    //5. Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped

    for (const checkbox of checkboxes) {


        //only if not checked
        if (await checkbox.isChecked()) //true
        {
            await checkbox.uncheck();
            expect(checkbox).not.toBeChecked();
        }
        else {
            //only if checked
            await checkbox.check();
            expect(checkbox).toBeChecked();
        }

    }

  

    //6. Randomly select check boxes - select checkboxes by index (1,3,6) and assert
    const indexes: number[] = [1, 3, 6];

    for (const i of indexes) {
        await checkboxes[i].check();
        await (expect(checkboxes[i])).toBeChecked();
    }
   */

    //7. select the check box based on the label
    const weekName: string = "Friday";

    for (const label of days) {

        if (label.toLowerCase() === weekName.toLocaleLowerCase()) {
            const checkbox: Locator = page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }

    }

    await page.waitForTimeout(3000);
});