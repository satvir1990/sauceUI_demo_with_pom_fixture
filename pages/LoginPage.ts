import { Page, Locator } from '@playwright/test'

export class LoginPage {
  // 1. Declare class properties and types
  page: Page;
  usernameField: Locator;
  passwordField: Locator;
  loginButton: Locator;

  // 2. Constructor to initialize locators using the Playwright page instance
  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  // 3. Methods/Actions to interact with the page elements
  async dologin(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}