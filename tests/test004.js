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