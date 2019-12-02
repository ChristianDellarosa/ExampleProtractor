describe('Calculator Test', function() {
  beforeAll(function() {
    var URL = "http://juliemr.github.io/protractor-demo/";
    browser.get(URL);
  });
  
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var acceptButton = element(by.id('gobutton'));
  var listOperators = element.all(by.model('operator'));

  function input(number1, number2, operator) {
    firstNumber.sendKeys(number1);
    secondNumber.sendKeys(number2);
    listOperators.click();
    listOperators.all(by.xpath("//option[@value='"+operator+"']")).click();
    acceptButton.click();
    switch (operator) {
      case "DIVISION":
          return number1/number2;      
          break;
      case "ADDITION":
        return number1+number2;
          break;
      case "MULTIPLICATION":
          return number1*number2;
          break;
      case "SUBTRACTION":
          return number1-number2;
            break;
      case "MODULO":
        return number1%number2;
      default:
          return 0;
  }
  }

  it('Operacion division', function() {
    var result = input(200,100,"DIVISION");
    if(result!=0) {
      expect(element(by.xpath("//h2[@class='ng-binding']")).getText()).not.toContain('NaN');
      expect(element(by.xpath("//h2[@class='ng-binding']")).getText()).toEqual(result.toString());
    }
  });

  it('Operacion Resta', function() {
    var result = input(500,600,"SUBTRACTION");
    if(result!=0) {
      expect(element(by.xpath("//h2[@class='ng-binding']")).getText()).not.toContain('NaN');
      expect(element(by.xpath("//h2[@class='ng-binding']")).getText()).toEqual(result.toString());
    }
  });
  
});