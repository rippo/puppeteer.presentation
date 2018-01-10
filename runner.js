const browser = require('./browser');
const options = require('./options');

//Mocha root level hooks
before((done) => {
  browser.setOptions(options);
  browser.setUp(done);
});

after(() => {
  browser.close();
});


// beforeEach(() => {
//   console.log("Before each test...");
// });

// afterEach(() => {
//   console.log("After each test...");
// });
