import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Authentication - Page Object Model Pattern', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC-01: Should login successfully with valid credentials', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.verifySuccessMessage('You logged into a secure area!');
  });

  test('TC-02: Should display error message with invalid password', async () => {
    await loginPage.login('tomsmith', 'WrongPassword123');
    await loginPage.verifyErrorMessage('Your password is invalid!');
  });

  test('TC-03: Should display error message with unknown username', async () => {
    await loginPage.login('unknown_user', 'SuperSecretPassword!');
    await loginPage.verifyErrorMessage('Your username is invalid!');
  });
});
