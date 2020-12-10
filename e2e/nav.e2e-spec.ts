import {NavContainer} from './nav.po';
import {browser} from 'protractor';
import {
  buildProfileUrl,
  DEFAULT_URL,
  EDITOR_URL,
  EMAIL_DOMAIN,
  EMAILS,
  HOME_URL,
  LOGIN_URL,
  PASSWORDS,
  REGISTER_URL,
  USERNAMES
} from './constants';
import {AuthPage} from './auth.po';
import {SettingsPage} from './settings.po';

describe('navigation', () => {
  let nav: NavContainer;
  let authPage: AuthPage;
  let settingsPage: SettingsPage;
  let config;

  beforeEach(async () => {
    nav = new NavContainer();
    authPage = new AuthPage();
    settingsPage = new SettingsPage();
    config = await browser.getProcessedConfig();
  });

  it('not logged in user should be able to navigate to login and register pages', async () => {
    await nav.getLoginNavItem().click();
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${LOGIN_URL}`);

    await nav.getRegisterNavItem().click();
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${REGISTER_URL}`);

    await nav.getHomeNavItem().click();
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${HOME_URL}`);
  });

  it('logged in user should be able to navigate to login and register pages', async () => {
    await authPage.loginWith(`${EMAILS.Morty}${EMAIL_DOMAIN}`, PASSWORDS.Morty);
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${DEFAULT_URL}`);

    await nav.getEditorNavItem().click();
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${EDITOR_URL}`);

    await nav.getProfileNavItem(USERNAMES.Morty).click();
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${buildProfileUrl(USERNAMES.Morty)}`);

    await nav.getHomeNavItem().click();
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${HOME_URL}`);

    await settingsPage.logout();
  });
});
