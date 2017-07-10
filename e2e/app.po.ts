import { browser, by, element } from 'protractor';

export class SilverDataportalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('silver-root h1')).getText();
  }
}
