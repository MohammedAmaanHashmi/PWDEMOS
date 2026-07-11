import { test, expect, Locator } from "@playwright/test";

test("Comparing methos", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const products: Locator = page.locator(".product-title"); //6

    //1) innertext() vs textcontent();
    // console.log(await products.nth(1).innerText());
    // console.log(await products.nth(1).textContent());

    /*  const count: number = await products.count();
 
     for (let i = 0; i < count; i++) {
 
         // const productName: string = await products.nth(i).innerText(); //Extracts plain text. Eliminates whitespace and line break
         // console.log(productName);
 
         const productName: null | string = await products.nth(i).textContent(); //Extracts text including hidden elements. Includes Extra whitespaces, line breaks, etc./
         console.log(productName?.trim());
     }  */


    //2 allInnerText() vs allTextContents()

    console.log("**** comparing allInnerText() vs allTextContents() ****");

    // const productNames: string[] = await products.allInnerTexts();
    // console.log("produts Names captured by all inner text(): ", productNames);
    /* 
        const productNames: string[] = await products.allTextContents();
        // console.log("produts Names captured by allTextContent(): ", productNames);
        const productNamesTrim: string[] = (productNames).map(text => text.trim());
        console.log("Product Names after trimmed: ", productNamesTrim); */


    //3) all() - converts Locator---> Locators[]
    //Returns array of locators
    const productsLocators: Locator[] = await products.all();
    console.log(productsLocators);

    console.log(await productsLocators[1].innerText());
    // for of loop
    /*    for (let productLoc of productsLocators) {
           console.log(await productLoc.innerText());
           if ((await productLoc.innerText()).includes("$25 Virtual Gift Card")) {
               console.log("Virtual Gift card is present")
           }
       } */


    console.log("****** for in loop ***********")
    for (let i in productsLocators) {

        console.log(await productsLocators[i].innerText());
    }




});