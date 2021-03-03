import {browser, by, element} from 'protractor';

const loginPath = '/login';
const registerPath = '/register';
const usernameInput = 'input[formcontrolname="username"]';
const emailInput = 'input[formcontrolname="email"]';
const passwordInput = 'input[formcontrolname="password"]';
const submitButton = 'button[type="submit"]';

export class AuthPage {
  navigateToLogin() {
    return browser.get(loginPath);
  }

  navigateToRegister() {
    return browser.get(registerPath);
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
