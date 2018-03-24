class SearchPageObject {

    constructor (browser, options) {

        this.browser = browser; 
        this.options = options; 

        this.pageH1Text = "Search"
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

    async getH1Content() {
        return await this.page.$eval("H1", h1 => {
            return h1.innerText;
        });
    };    

    async clearSearchBox() {
        await this.page.$eval(this.searchLocator, e => {
            e.value = '';
        });
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
     
     async isValidationMessageShown() {

        await this.page.waitForSelector(this.requiredValidationLocator)

        var msg = await this.page.$eval(this.requiredValidationLocator, e => {
            return e.innerText;
        });


        return msg === this.validationMessage;
    }; 

    async isNoResultsMessageShown() {

        await this.page.waitForSelector(this.noResultsLocator)

        var element = await this.page.$eval(this.noResultsLocator, e => {
            return e;
        });

        return element !== null;
    };     

    async executeSearch(letter) {
        await this.fillInSearchBox(letter);
        await this.submitTheForm();
        await this.awaitResults();
    }    
}

module.exports = SearchPageObject; 

