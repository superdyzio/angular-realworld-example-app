import { Ng2RealApp } from './app.po';
import {by, element} from 'protractor';

describe('ng-demo App', () => {
  let page: Ng2RealApp;

  by.addLocator('navItemByText', (text, parentElement, rootSelector) => {
    const parent = parentElement || document;
    const navItems = parent.querySelectorAll('a.nav-link');
    let result = null;
    navItems.forEach(el => {
      if (el.textContent.includes(text)) {
        result = el;
      }
    });

    return result;
  });

  beforeEach(() => {
    page = new Ng2RealApp();
  });

  it('should display message saying app works', async () => {
    await page.navigateTo();

    const loginNavItem = await element(by.navItemByText('Sign in'));
    console.log(await loginNavItem.getText());

    expect(await loginNavItem.getAttribute('href')).toContain('/login');
    expect(await page.getParagraphText()).toContain('conduit');
  });
});
