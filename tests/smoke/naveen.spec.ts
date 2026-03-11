import { test } from '../../fixtures/testFixtures';
import { expect } from '@playwright/test';
import { getEnv } from '../../config/env';


test('Register in Naveen Automation Labs @smoke', async ({ loginPage, page }) => {
    await page.goto('/opencart/index.php?route=account/register');
    await page.waitForLoadState("load")
    
    await page.getByRole('textbox',{name:'First Name'}).fill('pradip')
    await page.getByRole('textbox',{name:'Last name'}).fill('karmakar')
    
  //  await page.pause();
});

test('Register in Naveen Automation Labs1 @regression', async ({ loginPage, page }) => {
    await page.goto('/opencart/index.php?route=account/register');
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