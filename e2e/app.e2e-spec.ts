import { Angular2PassingDataPage } from './app.po';

describe('angular2-passing-data App', function() {
  let page: Angular2PassingDataPage;

  beforeEach(() => {
    page = new Angular2PassingDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
