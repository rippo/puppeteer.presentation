'use strict'; 

const options = require('../options');
const puppeteer = require('puppeteer'); 

async function run() {

    const browser = await puppeteer.launch( {
        headless: options.puppeteer.headless
    }); 

    const page = await browser.newPage(); 
    await page.goto('http://localhost:5000');
    await page.screenshot( {path:'./grabs/home.png'}); 
    await browser.close(); 
}; 

run(); 