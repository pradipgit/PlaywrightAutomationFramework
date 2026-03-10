
import { test, expect } from '@playwright/test';

test('Registration Test', async ({ page }) => {

 await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

 await page.fill("input[name='firstname']", "John");
 await page.fill("input[name='lastname']", "Doe");
 await page.fill("input[name='email']", "john123@test.com");
 await page.fill("input[name='telephone']", "9999999999");

 await page.fill("input[name='password']", "Password@123");
 await page.fill("input[name='confirm']", "Password@123");

 await page.check("input[name='agree']");
 await page.click("input[type='submit']");

 await expect(page.locator("h1")).toContainText("Your Account Has Been Created");

});
