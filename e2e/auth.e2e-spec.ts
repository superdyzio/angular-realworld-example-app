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
    await settingsPage.logout();
  });

  it('user should be able to sign up', async () => {
    const timestamp = new Date().getTime();

    await page.registerWith(
      `${USERNAMES.Jerry}${timestamp}`,
      `${EMAILS.Jerry}${timestamp}${EMAIL_DOMAIN}`,
      PASSWORDS.Jerry
    );

    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${DEFAULT_URL}`);
  });

  it('user should be able to sign in', async () => {
    await page.loginWith(`${EMAILS.Rick}${EMAIL_DOMAIN}`, PASSWORDS.Rick);

    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${DEFAULT_URL}`);
  });
});
