import { test } from '../../fixtures/testFixtures';
import { expect } from '@playwright/test';
import { getEnv } from '../../config/env';


test('Register in Naveen Automation Labs', async ({ loginPage, page }) => {
    await page.goto('/opencart/index.php?route=account/register');
    await page.waitForLoadState("load")
    
    await page.getByRole('textbox',{name:'First Name'}).fill('pradip')
    await page.getByRole('textbox',{name:'Last name'}).fill('karmakar')
    
    await page.pause();
});