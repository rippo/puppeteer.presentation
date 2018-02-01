// Type definitions for Search.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface SearchPageObject {
		
	/**
	 * 
	 * @param browser 
	 * @param options 
	 */
	new (browser : any, options : any);
		
	/**
	 * 
	 * @param id 
	 */
	visit(id : any): void;
		
	/**
	 * 
	 */
	awaitH1(): void;
		
	/**
	 * 
	 */
	getH1Content(): void;
		
	/**
	 * 
	 */
	clearSearchBox(): void;
		
	/**
	 * 
	 * @param query 
	 */
	fillInSearchBox(query : any): void;
		
	/**
	 * 
	 */
	submitTheForm(): void;
		
	/**
	 * 
	 */
	awaitResults(): void;
		
	/**
	 * 
	 */
	awaitNoResults(): void;
		
	/**
	 * 
	 */
	getTableResultsLength(): void;
		
	/**
	 * 
	 * @return  
	 */
	isValidationMessageShown(): boolean;
		
	/**
	 * 
	 * @return  
	 */
	isNoResultsMessageShown(): boolean;
		
	/**
	 * 
	 * @param letter 
	 */
	executeSearch(letter : any): void;
}
