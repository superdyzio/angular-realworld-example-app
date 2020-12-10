import {browser, by, element} from 'protractor';
import {LOGIN_URL, REGISTER_URL} from './constants';

const usernameInput = 'input[formcontrolname="username"]';
const emailInput = 'input[formcontrolname="email"]';
const passwordInput = 'input[formcontrolname="password"]';
const submitButton = 'button[type="submit"]';

export class AuthPage {
  navigateToLogin() {
    return browser.get(LOGIN_URL);
  }

  navigateToRegister() {
    return browser.get(REGISTER_URL);
  }

  getUsernameInput() {
    return element(by.css(usernameInput));
  }

  getEmailInput() {
    return element(by.css(emailInput));
  }

  getPasswordInput() {
    return element(by.css(passwordInput));
  }

  getSubmitButton() {
    return element(by.css(submitButton));
  }
}
