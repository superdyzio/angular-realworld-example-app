import {browser, by, element} from 'protractor';
import {HOME_URL} from './constants';

const feedToggleNavPills = 'a.nav-link';
const globalFeedNavPillText = 'Global Feed';
const feedTagPills = 'a.tag-pill';
const scienceFeedTagPillText = 'science';
const feedTagNavPill = '.nav-link.active';
const articlePreview = 'app-article-preview';
const articleTitle = 'h1';

export class HomePage {
  navigateTo() {
    return browser.get(HOME_URL);
  }

  getGlobalFeedNavPill() {
    return element(by.cssContainingText(feedToggleNavPills, globalFeedNavPillText));
  }

  getScienceFeedTagPill() {
    return element(by.cssContainingText(feedTagPills, scienceFeedTagPillText));
  }

  getScienceTagFeedNavPill() {
    return element(by.cssContainingText(feedTagNavPill, scienceFeedTagPillText));
  }

  getArticlesCount() {
    return element.all(by.css(articlePreview)).count();
  }

  getArticleByTitle(title: string) {
    return element(by.cssContainingText(articleTitle, title));
  }
}
