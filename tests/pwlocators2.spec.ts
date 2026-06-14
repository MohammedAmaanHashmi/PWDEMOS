2/*

Locator - Identifies the element on the page
DOM - Document  Object Model
DOM is an API Interface Provided by browser

1) page.getByAltText() to locate an element, usually image, by its text alternative.
2) page.getByText() to locate by text content. (Non interactive elements)
3) page.getByRole() to locate by explicit and implicit accessibility attributes.
4) page.getByLabel() to locate a form control by associated label's text.
5) page.getByPlaceholder() to locate an input by placeholder.

6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import { test, expect, Locator } from "@playwright/test"

test("VerifyPlaywright locators", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/");

  // 1. page.getByAltText() - identifies images (and similar elements) based on the alt attribute.
  // Use this locator when your element supports alt text such as img and area elements.
  const logo: Locator = page.getByAltText("naveenopencart");

  await expect(logo).toBeVisible();

  // 2. page.getByText() - Find an element by the text it contains. You can match by a substring, exact string,
  // Locate by visible text
  // Use this locator to find non interactive elements like div, span, p, etc.
  // For interactive elements like button, a, input, etc. use role locators.   


  // const text: Locator = page.getByText("Customer Service");
  // await expect(text).toBeVisible();

  await expect(page.getByText("Customer")).toBeVisible();  //provided  substring
  await expect(page.getByText("Customer Service")).toBeVisible();// full string
  await expect(page.getByText(/customer\s+Service/i)).toBeVisible();// regualar expression

  await page.getByRole("link", { name: 'My Account' }).first().click();
  await page.getByRole("link", { name: 'Register' }).first().click();

  await expect(page.getByRole("heading", { name: 'Register Account' })).toBeVisible();

  await page.getByLabel('First Name').fill("John");
  await page.getByLabel('Last Name').fill("Keneddy");
  await page.getByLabel('E-Mail').fill("abc@gmial.com");

  await page.getByPlaceholder('Password').first().fill("Skynet@1998");


 // await page.goto("file:///C:/Users/Amaan/Downloads/app.html");
  await page.goto("http://127.0.0.1:5500/tests/app.html");

  //  const link: Locator = page.getByTitle("Home page link");
  // await expect(link).toHaveText("Home");

  await expect(page.getByTitle("Home page link")).toHaveText("Home");
  await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");

  await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
  await expect(page.getByTestId("profile-name")).toHaveText("John Doe");


});
