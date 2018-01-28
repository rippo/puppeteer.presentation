class SearchPageObject {

    constructor (browser, options) {

        this.browser = browser; 
        this.options = options; 

        this.h1Locator = '#search';
        this.searchLocator = 'input[id="Query"]';
        this.submitButtonLocator = 'form input[type="submit"]';
        this.tableLocator = '#results';
        this.noResultsLocator = '#noResults';
        this.requiredValidationLocator = '[data-valmsg-for="Query"]'
        this.validationMessage = 'Enter a search term';
        this.noResultsMessage = "Sorry no results could be found!";

        var htmlPage = "/search/index/"; 
        this.pageUrl = options.appUrl + htmlPage; 
            
    };

    async visit(id) {
        //console.log(this.pageUrl); 
        this.page = await this.browser.newPage(); 
        await this.page.goto(this.pageUrl + id); 
    }; 

    async awaitH1() {
        await this.page.waitForSelector(this.h1Locator);
    };

    async getH1() {
        return await this.page.evaluate(() => {
            return document.querySelector("h1").innerText;
        });
    };    

    async clearSearchBox() {
        await this.page.evaluate((locator) => {
            document.querySelector(locator).value = '';
        }, this.searchLocator);
    }

    async fillInSearchBox(query) {
        await this.clearSearchBox();
        await this.page.type(this.searchLocator, query);
    };

    async submitTheForm () {
        await this.page.click(this.submitButtonLocator);
    };    
    
    async awaitResults() {
        await this.page.waitForSelector(this.tableLocator)
    };

    async awaitNoResults() {
        await this.page.waitForSelector(this.noResultsLocator)
    };    

    async getTableResultsLength() {
        return await this.page.evaluate(
                 (locator) => { 
                     return document.querySelector(locator)
                     .getElementsByTagName("tbody")[0]
                     .getElementsByTagName("tr").length
                 }
             , this.tableLocator)
     };
     
     async getValidationMessageIsShown() {

        await this.page.waitForSelector(this.requiredValidationLocator)

        var msg = await this.page.evaluate((selector) => {
            return document.querySelector(selector).innerText;
        }, this.requiredValidationLocator);


        return msg === this.validationMessage;
    }; 

    async getNoResultsIsShown() {

        await this.page.waitForSelector(this.noResultsLocator)

        var element = await this.page.evaluate((selector) => {
            return document.querySelector(selector);
        }, this.noResultsLocator);

        return element !== null;
    };     

    async executeSearch(letter) {
        await this.fillInSearchBox(letter);
        await this.submitTheForm();
        await this.awaitResults();
    }    
}

module.exports = SearchPageObject; 

