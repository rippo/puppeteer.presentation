/*used to create base images for image comparions*/

'use strict'; 

const options = require('../options');
const puppeteer = require('puppeteer'); 

async function run() {

    const browser = await puppeteer.launch( {
        headless: options.puppeteer.headless
    }); 

    const page = await browser.newPage(); 

    await page.goto('http://localhost:5000');

    if (options.puppeteer.headless)
        await page.screenshot( {path:'./images/ORG-home-headless.png'}); 
    else
        await page.screenshot( {path:'./images/ORG-home.png'}); 
    
    await browser.close(); 
}; 

run(); 