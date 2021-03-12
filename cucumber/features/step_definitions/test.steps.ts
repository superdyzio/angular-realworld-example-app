import * as assert from 'assert';
import { browser } from 'protractor';
import { Before, Given, When, Then } from '@cucumber/cucumber';
import { AuthPage } from '../../../e2e/auth.po';
import { DEFAULT_URL, EMAIL_DOMAIN, EMAILS, PASSWORDS } from '../../../e2e/constants';

Before(async function () {
  this.authPage = new AuthPage();
  this.config = await browser.getProcessedConfig();
});

Given('I am on the Login Page', async function () {
  await this.authPage.navigateToLogin();
});

When('I type my credentials', async function () {
  await this.authPage.getEmailInput().sendKeys(`${EMAILS.Morty}${EMAIL_DOMAIN}`);
  await this.authPage.getPasswordInput().sendKeys(PASSWORDS.Morty);
});

When('I submit the form', async function () {
  await this.authPage.getSubmitButton().click();
});

Then('I should be redirected to Home Page', async function () {
  assert.equal(
    await browser.getCurrentUrl(),
    `${this.config.baseUrl}${DEFAULT_URL}`
  );
});
