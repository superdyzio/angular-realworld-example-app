import {browser, by, element} from 'protractor';

const settingsPath = '/settings';
const logoutButton = 'button.btn-outline-danger';

export class SettingsPage {
  navigateTo() {
    return browser.get(settingsPath);
  }

  getLogoutButton() {
    return element(by.css(logoutButton));
  }
}
