import { type Page, type Locator, expect } from '@playwright/test';

/**
 * LoginPage - Page Object Model (POM)
 * Encapsula localizadores y acciones de la página de Login
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async verifySuccessMessage(expectedText: string) {
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText(expectedText);
  }

  async verifyErrorMessage(expectedText: string) {
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText(expectedText);
  }
}
