const { expect } = require('chai');
const { test } = require('../../browser');
const loginPage  = require('./pages/Login');
const searchPage = require('./pages/Search');

describe('when logging in as test2@test.com', () => {

    let LoginPage, SearchPage;

    it('it logs me in and shows the search page', test(async (browser, opts) => {

        LoginPage = new loginPage(browser, opts);
        SearchPage = new searchPage(browser, opts);
        await LoginPage.fullLogin("test2@test.com", "123");

        await SearchPage.visit(2);
        await SearchPage.awaitH1();

        const innerText = await SearchPage.getH1Content();        
        expect(innerText).to.equal(SearchPage.pageH1Text);
    
    }));

    it('it returns four results when searching for a', test(async(browser, opts) => {

        await SearchPage.executeSearch("a");

        const resultLength = await SearchPage.getTableResultsLength();
        expect(resultLength).to.equal(4);

    }));


    it('it returns no results when searching for b', test(async(browser, opts) => {

        await SearchPage.fillInSearchBox("b");
        await SearchPage.submitTheForm();
        await SearchPage.awaitNoResults();
        
        const resultLength = await SearchPage.getNoResultsIsShown();
        expect(resultLength).to.equal(true);

    }));    

    it('it returns one result when searching for c', test(async(browser, opts) => {

        await SearchPage.executeSearch("c");

        const resultLength = await SearchPage.getTableResultsLength();
        expect(resultLength).to.equal(1);

    }));

    it('it returns two results when searching for e', test(async(browser, opts) => {

        await SearchPage.executeSearch("e");

        const resultLength = await SearchPage.getTableResultsLength();
        expect(resultLength).to.equal(2);

    }));


    
    
});