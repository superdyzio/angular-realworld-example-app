import {Ng2RealApp} from './app.po';
import {browser, protractor} from 'protractor';

describe('ng-demo App', () => {
  let page: Ng2RealApp;

  beforeEach(() => {
    page = new Ng2RealApp();
    browser.waitForAngularEnabled(false);
  });

  it('should display message saying app works', async () => {
    await page.navigateTo();

    const button = await page.getTestButton();
    console.log(await button.getAttribute('disabled'));
    await browser.wait(protractor.ExpectedConditions.elementToBeClickable(button), 3000, '3 seconds passed');
    console.log(await button.getAttribute('disabled'));

    expect(await page.getParagraphText()).toContain('conduit');
  });
});
