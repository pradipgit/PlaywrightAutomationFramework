import { Page } from "@playwright/test";

export class BasePage{
    constructor(protected page: Page) {};

    async click(selector: string) {
        await this.page.click(selector);
    }

    async fill(selector: string, value: string) {
        await this.page.fill(selector, value);
    }

    async selectOption(selector: string, value: string) {
        await this.page.selectOption(selector, value);
    }

    async selectMultipleOptions(selector: string, values: string[]) {
        await this.page.selectOption(selector, values);
    }

    async waitForSelector(selector: string) {
        await this.page.waitForSelector(selector);
    }

    async waitForTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async waitForNavigation(options?: Parameters<Page["waitForNavigation"]>[0]) {
        await this.page.waitForNavigation(options);
    }
    
}