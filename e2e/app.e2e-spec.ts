import { Ng2RealApp } from './app.po';
import {browser, by, element} from 'protractor';
import * as fs from 'fs';

function saveScreenshot(data, filename: string) {
  if (!fs.existsSync(`${__dirname}\\screenshots`)) {
    fs.mkdirSync(`${__dirname}\\screenshots`);
  }

  fs.writeFileSync(
    `${__dirname}\\screenshots\\${filename}.png`,
    data,
    {encoding: 'base64', flag: 'w'}
  );
}

describe('ng-demo App', () => {
  let page: Ng2RealApp;

  beforeEach(() => {
    page = new Ng2RealApp();
  });

  it('should display message saying app works', async () => {
    await page.navigateTo();
    saveScreenshot(await browser.takeScreenshot(), 'home-page');
    saveScreenshot(await element(by.css('a.nav-link')).takeScreenshot(), 'home-nav-link');
    expect(await page.getParagraphText()).toContain('conduit');
  });
});
