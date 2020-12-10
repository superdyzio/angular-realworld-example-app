import {browser, protractor} from 'protractor';
import {AuthPage} from './auth.po';
import {
  DEFAULT_URL,
  EMAIL_DOMAIN,
  EMAILS,
  INITIAL_TOTAL_ARTICLES_COUNT,
  NEW_ARTICLE_BODY,
  NEW_ARTICLE_COMMENT,
  NEW_ARTICLE_DESCRIPTION,
  NEW_ARTICLE_TAG,
  NEW_ARTICLE_TITLE,
  PASSWORDS
} from './constants';
import {SettingsPage} from './settings.po';
import {EditorPage} from './editor.po';
import {HomePage} from './home.po';
import {ArticlePage} from './article.po';

describe('editor', () => {
  let page: EditorPage;
  let homePage: HomePage;
  let authPage: AuthPage;
  let articlePage: ArticlePage;
  let settingsPage: SettingsPage;
  let config;

  beforeEach(async () => {
    page = new EditorPage();
    homePage = new HomePage();
    authPage = new AuthPage();
    articlePage = new ArticlePage();
    config = await browser.getProcessedConfig();
    await authPage.loginWith(`${EMAILS.Morty}${EMAIL_DOMAIN}`, PASSWORDS.Morty);
    expect(await browser.getCurrentUrl()).toEqual(`${config.baseUrl}${DEFAULT_URL}`);
  });

  afterEach(async () => {
    settingsPage = new SettingsPage();
    await settingsPage.logout();
  });

  it('logged in user should be able to publish an article', async () => {
    await homePage.getGlobalFeedNavPill().click();
    expect(await homePage.getArticlesCount()).toEqual(INITIAL_TOTAL_ARTICLES_COUNT);

    await page.navigateTo();
    await page.getTitleInput().sendKeys(NEW_ARTICLE_TITLE);
    await page.getDescriptionInput().sendKeys(NEW_ARTICLE_DESCRIPTION);
    await page.getBodyInput().sendKeys(NEW_ARTICLE_BODY);
    await page.getTagsInput().sendKeys(NEW_ARTICLE_TAG, protractor.Key.ENTER);
    await page.getPublishButton().click();

    await homePage.navigateTo();
    await homePage.getGlobalFeedNavPill().click();
    expect(await homePage.getArticlesCount()).toEqual(INITIAL_TOTAL_ARTICLES_COUNT + 1);
    expect(await homePage.getArticleByTitle(NEW_ARTICLE_TITLE)).toBeTruthy();
  });

  it('should be able to comment the new article', async () => {
    await homePage.getGlobalFeedNavPill().click();
    expect(await homePage.getArticlesCount()).toEqual(INITIAL_TOTAL_ARTICLES_COUNT + 1);

    await homePage.getArticleByTitle(NEW_ARTICLE_TITLE).click();
    expect(await articlePage.getCommentsCount()).toEqual(0);
    await articlePage.getCommentInput().sendKeys(NEW_ARTICLE_COMMENT);
    await articlePage.getPostButton().click();
    expect(await articlePage.getCommentsCount()).toEqual(1);
  });
});
