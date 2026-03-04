import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    searchBox = this.page.getByRole('combobox', { name: 'Search' });
    searchButton = this.page.getByRole('button', { name: 'Search' });

    async searchInGoogle(searchQuery:string) {
        await this.searchBox.fill(searchQuery);
        await this.searchButton.click();
    }

    
}