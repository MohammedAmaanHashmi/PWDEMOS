import { test, expect, Locator } from "@playwright/test";

test("xpath demo in playwright", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //1. Absolute xpath - logo
    const absoluteLogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absoluteLogo).toBeVisible();

    //2. Relative xpath - logo
    const relavtiveLocator: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relavtiveLocator).toBeVisible();

    //3. contains()

    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productsCount: number = await products.count();
    console.log("Computer related Products: " + productsCount)
    expect(productsCount).toBeGreaterThan(0);

    // console.log(products.textContent()); //Error: strict mode violation:

    console.log("First computer related product", await products.first().textContent());
    console.log("Laste computer related product", await products.last().textContent());
    console.log("Laste computer related product", await products.nth(2).textContent()); //Indes is starting from Zero

    let productTitles: string[] = await products.allTextContents(); //getting all the matched products in to an array

    console.log("All computer related products titles:", productTitles);

    for (let pt of productTitles) {
        console.log(pt)

    }

    //4. start-with()

    const builingProudcts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]") //returns multiple elements
    const count: number = await builingProudcts.count();
    expect(count).toBeGreaterThan(0);

    //5. text()
    const reglink: Locator = page.locator("//a[normalize-space()='Register']");
    await expect(reglink).toBeVisible();

    //6. last()
    const lastItem: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastItem).toBeVisible();
    console.log("Text content of last element", await lastItem.textContent());

    //7. position()
    const positionItem: Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionItem).toBeVisible();

    console.log("Text content of position element", await positionItem.textContent());





});