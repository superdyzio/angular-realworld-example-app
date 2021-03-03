import {browser, by, element} from 'protractor';
import {EDITOR_URL} from './constants';

const titleInput = 'input[formcontrolname="title"]';
const descriptionInput = 'input[formcontrolname="description"]';
const bodyInput = 'textarea[formcontrolname="body"]';
const tagsInput = 'input:not([formcontrolname])';
const publishButton = 'button.btn-lg.pull-xs-right.btn-primary';

export class EditorPage {
  navigateTo() {
    return browser.get(EDITOR_URL);
  }

  getTitleInput() {
    return element(by.css(titleInput));
  }

  getDescriptionInput() {
    return element(by.css(descriptionInput));
  }

  getBodyInput() {
    return element(by.css(bodyInput));
  }

  getTagsInput() {
    return element(by.css(tagsInput));
  }

  getPublishButton() {
    return element(by.css(publishButton));
  }
}
