const {expect } = require('chai'); 
const {test } = require('../browser'); 
const path = require('path'); 
const options = require('../options');
const looksSame = require('looks-same');

describe('When I take a screenshot of the home page', () =>  {

    //Image we are going to download
    var image1 = path.join(__dirname, '../images/home.png'); 

    //The image we are going to compare against
    var image2 = path.join(__dirname, '../images/ORG-home-headless.png'); 

    //There seems to be a difference between chromium in headless
    //  and normal mode. So if showing the browser use the non
    //  headless image
    if (!options.puppeteer.headless) {
        image2 = path.join(__dirname, '../images/ORG-home.png'); 
    }

    //save home page as an image
    it('it returns a buffer', test(async (browser, opts) =>  {
        var page = await browser.newPage(); 
        await page.goto(`${opts.appUrl}`); 
        await page.waitFor('h1'); 
        const screen = await page.screenshot( {path:'./images/home.png'}); 
        expect(screen).to.not.equal(null);
    }));

    it('it should be same as the original image', (done) => {
        looksSame(image1, image2, (error, equal) => {
            //console.log(equal);
            expect(error).to.equal(null);
            expect(equal).to.equal(true);
            done();
        });
    });    

}); 

