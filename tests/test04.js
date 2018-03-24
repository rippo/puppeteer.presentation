const { expect } = require('chai');
const { test } = require('../browser');

const EMAIL_SELECTOR = 'input[name=email]';
const NAME_SELECTOR = 'input[name=name]';
const SUBMIT_SELECTOR = '[id=btnSubmit]';
const LABEL_SELECTOR = 'div.form-group';

describe('When testing the contact form', () => {

    let page;

    //contact page
    it('it shows the correct title', test(async (browser, opts) => {
        page = await browser.newPage();
        await page.goto(`${opts.appUrl}/contact`);

        await page.waitFor('h1');
        const innerText = await page.$eval('H1', h1 => {
            return h1.innerText;
        });

        expect(innerText).to.be.equal('Contact Us');
    }));

    //FILL IN HERE


    //now click the button
    it('it shows thanks when we click the send enquiry button', test(async (browser, opts) => {

        await page.click(SUBMIT_SELECTOR);

        //in a non spa program we could use. WITH CARE!
        //await page.waitForNavigation();

        await page.waitForSelector("[id=thanks]");

        const header = await page.$eval('H1', h1 => {
            return h1.innerText;
        });

        expect(header).to.be.equal("Thanks!");

    }));

});