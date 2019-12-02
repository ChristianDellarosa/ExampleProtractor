var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: { 
    browserName: 'chrome', 
    },
    specs: ['CalculatorTest.js', 'ZagatTest.js'],
    /* REPORT */
    onPrepare: function() {
      jasmine.getEnv().addReporter(new HtmlReporter({
              docTitle: 'Reporte',
              baseDirectory: 'Reports', 
              screenshotsSubfolder: 'images',
              jsonsSubfolder: 'jsons',
              preserveDirectory: false,
              collectBrowserLogs : false,
              clientDefaults:{
                showTotalDurationIn: "belowHeader",                  
                totalDurationFormat: "h:m:s",
                columnSettings:{
                    displayTime:true,
                    displayBrowser:false,
                    displaySessionId:false,
                    displayOS:false,
                    inlineScreenshots:false,
                    warningTime: 5000,
                    dangerTime: 10000
                }
             }     
           }).getJasmine2Reporter());
        }
}