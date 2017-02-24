import { SpockPage } from './app.po';

describe('spock App', () => {
  let page: SpockPage;

  beforeEach(() => {
    page = new SpockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
