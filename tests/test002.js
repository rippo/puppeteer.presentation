const { expect } = require('chai');
const { test } = require('../browser');

describe('When viewing the counter page ', () => {

    var page;

    it('it shows the H1 Counter', test(async (browser, opts) => {

        page = await browser.newPage();
        await page.goto('http://localhost:5000/counter');

        await page.waitForSelector('H1');

        const innerText = await page.evaluate(() => {
            return document.querySelector("H1").innerText;
        });

        expect(innerText).to.be.equal('Counter');

    }));

    it('and when clicking the counter it increases to 1', test(async (browser, opts) => {
        await page.click("button.btn");
        var counter = await page.evaluate(() => {
            return document.querySelector("h2 strong").innerText;
        });
        expect(counter).to.be.equal('1');
    }));

    it('and when clicking the counter it increases to 2', test(async (browser, opts) => {
        await page.click("button.btn");
        var counter = await page.evaluate(() => {
            return document.querySelector("h2 strong").innerText;
        });
        expect(counter).to.be.equal('2');
    }));

    it('and when clicking the counter it increases to 3', test(async (browser, opts) => {
        await page.click("button.btn");
        var counter = await page.evaluate(() => {
            return document.querySelector("h2 strong").innerText;
        });
        expect(counter).to.be.equal('3');
    }));
    
})