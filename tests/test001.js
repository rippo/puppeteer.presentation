const { expect } = require('chai');
const { test } = require('../browser');

describe('When viewing the home page', () => {

    it('it shows Hello from Rippo!', test(async (browser, opts) => {

        const page = await browser.newPage();
        await page.goto('http://localhost:5000');

        await page.waitForSelector('H1');

        //NOTE: The actual HTML page is sandboxed. 
        //  To get access to the page DOM we use
        //  evaluate.
        const innerText = await page.evaluate(() => {
            return document.querySelector("H1").innerText;
        });

        expect(innerText).to.be.equal('Hello from Rippo!');

    }))
})