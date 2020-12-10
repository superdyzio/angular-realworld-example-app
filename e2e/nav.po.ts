import {by, element} from 'protractor';
import {buildProfileUrl, EDITOR_URL, HOME_URL, LOGIN_URL, REGISTER_URL, SETTINGS_URL} from './constants';

const homeNavItem = `a.nav-link[href="${HOME_URL}"]`;
const loginNavItem = `a.nav-link[href="${LOGIN_URL}"]`;
const registerNavItem = `a.nav-link[href="${REGISTER_URL}"]`;
const editorNavItem = `a.nav-link[href="${EDITOR_URL}"]`;
const settingsNavItem = `a.nav-link[href="${SETTINGS_URL}"]`;
const getProfileNavItem = username => `a.nav-link[href="${buildProfileUrl(username)}"]`;

export class NavContainer {
  getHomeNavItem() {
    return element(by.css(homeNavItem));
  }

  getLoginNavItem() {
    return element(by.css(loginNavItem));
  }

  getRegisterNavItem() {
    return element(by.css(registerNavItem));
  }

  getEditorNavItem() {
    return element(by.css(editorNavItem));
  }

  getSettingsNavItem() {
    return element(by.css(settingsNavItem));
  }

  getProfileNavItem(username) {
    return element(by.css(getProfileNavItem(username)));
  }
}
