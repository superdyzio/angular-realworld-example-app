import {browser, by, element} from 'protractor';

export class Ng2RealApp {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.logo-font')).getText();
  }

  getTestButton() {
    return element(by.id('test'));
  }
}
