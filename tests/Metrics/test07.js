const { expect } = require('chai');
const { test } = require('../../browser');

describe('When looking at the metrics', () => {

    let maxDuration = 0.35;

    it(`it only takes at most ${maxDuration} to render the scripts`, test(async (browser, opts) => {

        const page = await browser.newPage();

        await page.goto(`${opts.appUrl}`);
        await page.goto(`${opts.appUrl}/fetchdata`);
        await page.waitForSelector('h1');
        const metrics = await page.metrics();
        
        //console.log(metrics);

        //lets get how long the page took to run the scripts
        expect(metrics.ScriptDuration).to.be.at.most(maxDuration);

    }));
});

        
        
     
