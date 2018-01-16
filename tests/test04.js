const { expect } = require('chai');
const { test } = require('../browser');

const EMAIL_SELECTOR = 'input[name=email]';
const NAME_SELECTOR = 'input[name=name]';
const SUBMIT_SELECTOR = '[id=btnSubmit]';
const LABEL_SELECTOR = 'div.form-group';

describe('When testing the contact form', () => {

    var page;

    //contact page
    it('it shows the correct title', test(async (browser, opts) => {
        page = await browser.newPage();
        await page.goto(`${opts.appUrl}/contact`);

        await page.waitFor('h1');
        const innerText = await page.evaluate((sel) => {
            return document.querySelector(sel).innerText;
        }, "h1");

        expect(innerText).to.be.equal('Contact Us');
    }));

   
    //FILL IN HERE
    //start to fill in the email address
    it('it shows a validation error when we type a partial email', test(async (browser, opts) => {
        await page.waitFor(EMAIL_SELECTOR);
        await page.type(EMAIL_SELECTOR, "test1");

        const className = await page.evaluate((sel) => {
            return document.querySelectorAll(sel)[0].className;
        }, LABEL_SELECTOR);

        expect(className).to.be.equal('form-group has-error');
        
   }));

   it('and the submit button is still disabled', test(async (browser, opts) => {

       const buttonIsDisabled = await page.evaluate((sel) => {
           return document.querySelector(sel).disabled;
       }, SUBMIT_SELECTOR);

       expect(buttonIsDisabled).to.be.equal(true);
   }));
   
   //fill in a valid email address
   it('it clears the validation error when we type a valid email', test(async (browser, opts) => {
       await page.type(EMAIL_SELECTOR, "@test.com");

       const className = await page.evaluate((sel) => {
           return document.querySelectorAll(sel)[0].className;
       }, LABEL_SELECTOR);

       expect(className).to.be.equal('form-group');
   }));

   it('and the submit button is still disabled', test(async (browser, opts) => {

       const buttonIsDisabled = await page.evaluate((sel) => {
           return document.querySelector(sel).disabled;
       }, SUBMIT_SELECTOR);

       expect(buttonIsDisabled).to.be.equal(true);

   }));

   //fill in a name with 3 chars
   it('it shows a validation error when we type a name of three chars', test(async (browser, opts) => {
       await page.type(NAME_SELECTOR, "Mr ");

       const className = await page.evaluate((sel) => {
           return document.querySelectorAll(sel)[1].className;
       }, LABEL_SELECTOR);

       expect(className).to.be.equal('form-group has-error');
   }));

   it('and the submit button is still disabled', test(async (browser, opts) => {

       const buttonIsDisabled = await page.evaluate((sel) => {
           return document.querySelector(sel).disabled;
       }, SUBMIT_SELECTOR);

       expect(buttonIsDisabled).to.be.equal(true);

   }));

   //fill in a validname
   it('it clears the validation error when we type a valid name', test(async (browser, opts) => {
       await page.type(NAME_SELECTOR, " bar");

       const className = await page.evaluate((sel) => {
           return document.querySelectorAll(sel)[1].className;
       }, LABEL_SELECTOR);

       expect(className).to.be.equal('form-group');
   }));

   it('and the submit button is now enabled', test(async (browser, opts) => {

       const buttonIsDisabled = await page.evaluate((sel) => {
           return document.querySelector(sel).disabled;
       }, SUBMIT_SELECTOR);

       expect(buttonIsDisabled).to.be.equal(false);

   }));    

    //now click the button
    it('it shows thanks when we click the send enquiry button', test(async (browser, opts) => {

        await page.click(SUBMIT_SELECTOR);

        //in a non spa program we could use
        //await page.waitForNavigation();
        
        await page.waitForSelector("[id=thanks]");

        const header = await page.evaluate((sel) => {
            return document.querySelector(sel).innerText;
        }, "h1");

        expect(header).to.be.equal("Thanks!");

    }));
 
});