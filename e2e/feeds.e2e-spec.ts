import {browser} from 'protractor';
import {AuthPage} from './auth.po';
import {HomePage} from './home.po';
import {DEFAULT_URL, EMAIL_DOMAIN, EMAILS, PASSWORDS, SCIENCE_TAG_ARTICLES_COUNT} from './constants';
import {SettingsPage} from './settings.po';

describe('feeds', () => {
  let page: HomePage;
  let authPage: AuthPage;
  let settingsPage: SettingsPage;
  let config;

  beforeEach(async () => {
    page = new HomePage();
    authPage = new AuthPage();
    config = await browser.getProcessedConfig();
    await authPage.loginWith(`${EMAILS.Morty}${EMAIL_DOMAIN}`, PASSWORDS.Morty);
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${DEFAULT_URL}`);
  });

  afterEach(async () => {
    settingsPage = new SettingsPage();
    await settingsPage.logout();
  });

  it('logged in user should be able to filter global feed by tag', async () => {
    await page.navigateTo();
    await page.getGlobalFeedNavPill().click();
    await page.getScienceFeedTagPill().click();

    expect(await page.getScienceTagFeedNavPill()).toBeTruthy();
    expect(await page.getArticlesCount()).toBeGreaterThanOrEqual(SCIENCE_TAG_ARTICLES_COUNT);
  });
});
