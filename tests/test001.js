const { expect } = require('chai');
const { test } = require('../browser');

describe('When viewing the home page', () => {

    it('it shows Hello, world!', test(async (browser, opts) => {

        const page = await browser.newPage();
        await page.goto('http://localhost:5000');

        await page.waitForSelector('H1');

        const innerText = await page.evaluate(() => {
            return document.querySelector("H1").innerText
        });

        expect(innerText).to.be.equal('Hello, world!')

    }))
})