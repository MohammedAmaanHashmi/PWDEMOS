import { test, expect, Locator } from "@playwright/test";

test("static web table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();
    const rows = table.locator("tr") //returns all the rows including heasder
    await expect(rows).toHaveCount(7);  //7 //approach 1

    const rowCount: number = await rows.count();
    console.log("Number of rows in the table: ", rowCount);
    expect(rowCount).toBe(7);  //approach 2

    //2 count number of headers.columns
    const columns: Locator = rows.locator("th");
    await expect(columns).toHaveCount(4);

});