const { expect } = require('chai');
const { test } = require('../browser');

describe('When viewing the counter page ', () => {

    let page;

    //Lets make sure we are on the counter page 
    it('it shows the H1 Counter', test(async (browser, opts) => {

        page = await browser.newPage();
        await page.goto(`${opts.appUrl}/counter`);

        await page.waitForSelector('H1');

        const innerText = await page.$eval('H1', h1 => {
            return h1.innerText;
        });

        expect(innerText).to.be.equal('Counter');

    }));

    //clickity click time!
    it('and when clicking the counter it increases to 1', test(async (browser, opts) => {
        const counter = await clickCounter();
        expect(counter).to.be.equal('1');
    }));

    //clickity time again!
    it('and when clicking the counter it increases to 2', test(async (browser, opts) => {
        const counter = await clickCounter();
        expect(counter).to.be.equal('2');
    }));

    //what more clickity clicking, c'mon!
    it('and when clicking the counter it increases to 3', test(async (browser, opts) => {
        const counter = await clickCounter();
        expect(counter).to.be.equal('3');
    }));

    async function clickCounter() {
        await page.click("button.btn");
        return await page.$eval('h2 strong', h2 => {
            return h2.innerText;
        });
    };
 
    
});

