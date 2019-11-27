 // spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys(100);
    element(by.model('second')).sendKeys(200);

    var Operadores = element.all(by.model('operator')).click();
    var OpDivision = Operadores.all(by.xpath("//option[@value='DIVISION']")).click();
    element(by.id('gobutton')).click();

    expect(element(by.xpath("//h2[@class='ng-binding']")).getText()).toEqual('0.5');
  });
});