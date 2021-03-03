import {by, element} from 'protractor';

const commentInput = 'div.card-block textarea';
const postButton = 'button.btn-sm.btn-primary';
const articleComment = 'app-article-comment';

export class ArticlePage {
  getCommentInput() {
    return element(by.css(commentInput));
  }

  getPostButton() {
    return element(by.css(postButton));
  }

  getCommentsCount() {
    return element.all(by.css(articleComment)).count();
  }
}
