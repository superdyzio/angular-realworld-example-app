import {AuthPage} from './auth.po';
import {browser} from 'protractor';
import {SettingsPage} from './settings.po';
import {DEFAULT_URL, EMAIL_DOMAIN, EMAILS, PASSWORDS, USERNAMES} from './constants';

describe('Auth scenarios', () => {
  let page: AuthPage;
  let settingsPage: SettingsPage;
  let config;

  beforeEach(async () => {
    page = new AuthPage();
    config = await browser.getProcessedConfig();
  });

  afterEach(async () => {
    settingsPage = new SettingsPage();
    await settingsPage.navigateTo();
    await settingsPage.getLogoutButton().click();
  });

  it('user should be able to sign up', async () => {
    const timestamp = new Date().getTime();

    await page.navigateToRegister();
    await page.getUsernameInput().sendKeys(`${USERNAMES.Jerry}${timestamp}`);
    await page.getEmailInput().sendKeys(`${EMAILS.Jerry}${timestamp}${EMAIL_DOMAIN}`);
    await page.getPasswordInput().sendKeys(PASSWORDS.Jerry);
    await page.getSubmitButton().click();

    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${DEFAULT_URL}`);
  });

  it('user should be able to sign in', async () => {
    await page.navigateToLogin();
    await page.getEmailInput().sendKeys(`${EMAILS.Rick}${EMAIL_DOMAIN}`);
    await page.getPasswordInput().sendKeys(PASSWORDS.Rick);
    await page.getSubmitButton().click();

    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${DEFAULT_URL}`);
  });
});
