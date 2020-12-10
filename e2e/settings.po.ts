import {browser, by, element} from 'protractor';
import {SETTINGS_URL} from './constants';

const logoutButton = 'button.btn-outline-danger';

export class SettingsPage {
  navigateTo() {
    return browser.get(SETTINGS_URL);
  }

  getLogoutButton() {
    return element(by.css(logoutButton));
  }
}
