import { SilverDataportalPage } from './app.po';

describe('silver-dataportal App', () => {
  let page: SilverDataportalPage;

  beforeEach(() => {
    page = new SilverDataportalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to silver!!');
  });
});
