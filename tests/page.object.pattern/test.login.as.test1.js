
const { expect } = require('chai');
const { test } = require('../../browser');
const loginPage  = require('./pages/Login');
const searchPage = require('./pages/Search');

describe('when logging in as test1@test.com', () => {

    var LoginPage, SearchPage;

    it('it logs me in and shows the search page', test(async (browser, opts) => {

        LoginPage = new loginPage(browser, opts);
        SearchPage = new searchPage(browser, opts);
        await LoginPage.fullLogin("test1@test.com", "123");

        await SearchPage.visit(1);
        await SearchPage.awaitH1();

        const innerText = await SearchPage.getH1();        
        expect(innerText).to.equal("Search");
    
    }));

    it('it returns a validation message for a blank search', test(async(browser, opts) => {

        await SearchPage.awaitH1();
        await SearchPage.submitTheForm();
        
        const validationShown = await SearchPage.getValidationMessageIsShown();
        expect(validationShown).to.equal(true);

    }));    


    it('it returns three results when searching for a', test(async(browser, opts) => {

        await SearchPage.executeSearch("a");

        const resultLength = await SearchPage.getTableResultsLength();
        expect(resultLength).to.equal(3);

    }));

    it('it returns one result when searching for b', test(async(browser, opts) => {

        await SearchPage.executeSearch("b");

        const resultLength = await SearchPage.getTableResultsLength();
        expect(resultLength).to.equal(1);

    }));

    it('it returns one result when searching for c', test(async(browser, opts) => {

        await SearchPage.executeSearch("c");
        
        const resultLength = await SearchPage.getTableResultsLength();
        expect(resultLength).to.equal(1);

    }));    
    

    it('it returns two results when searching for d', test(async(browser, opts) => {

        await SearchPage.executeSearch("d");
        
        const resultLength = await SearchPage.getTableResultsLength();
        expect(resultLength).to.equal(2);

    }));

    
    
});