describe('Zagat Test', function() {
  beforeAll(function() {
  var URL = ('https://www.zagat.com/'); 
  browser.get(URL);
  });
  var theLatestPage = element(by.xpath("//a[normalize-space(text())='The Latest']"));
  var tittleTheLatest = element(by.xpath("//h1[contains(text(),'The Latest')]"));

    it('Navigate Toolbar', function() {
      theLatestPage.click();
      expect(tittleTheLatest.isDisplayed()).toBe(true);
    });
  });