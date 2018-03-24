const { expect } = require('chai');
const { test } = require('../browser');

describe('When viewing the home page', () => {

    let page;

    it('it shows Hello from Rippo!', test(async (browser, opts) => {

        page = await browser.newPage();
        //notice we are using ES6 Template Strings
        await page.goto(`${opts.appUrl}`);

        await page.waitForSelector('H1');

        //NOTE: The actual HTML page is sandboxed. 
        //  To get access to the page DOM we use
        //  evaluate.
        const innerText = await page.evaluate(() => {
            return document.querySelector("H1").innerText;
        });

        expect(innerText).to.be.equal('Hello from Rippo!');

    }));

    it('it shows Hello from Rippo! (2)', test(async (browser, opts) => {

        //This method runs document.querySelector
        const value = await page.$eval('h1', h1 => {
            return h1.innerText;
        });
        expect(value).to.be.equal('Hello from Rippo!');

    }));
 
});