/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        /* This tests to makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        
         it('allFeeds variable are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed 
        *  in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('allFeeds have a valid url', () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This test will loop through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('all Feeds have a valid name', () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
         
    });


    /* Test suite "The menu" */
    describe('The Menu',() => {
        /* This test will ensure that the menu element is
         * hidden by default. 
         */

        var body = document.querySelector('body');
        it('hides by default', () => {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

                
        /*  This test ensures the menu changes
         * visibility when the menu icon is clicked. 
         */
        var menu = document.querySelector('.menu-icon-link');
         
        it('changes when clicked', () => {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });  
    });

    /* End of The menu */ 
    
    
    /* Test suite: "Initial Entries" */
    describe('Initial Entries',() => {
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        let feed; 

        beforeEach((done) => {
            loadFeed(0, () => {
                feed = $('.feed .entry');
                done();
                console.log(feed.length);
            });
        });

        it('has at least one entry', (done) => {
            expect(feed.length).toBeGreaterThan(0);
            done();
        });         
    }); 
    /* END of Initial Entries */

    /* Test suite: "New Feed Selection" */
    describe('New Feed Selection',() => {  
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    let firstFeed, 
        secondFeed;    

    beforeEach(function(done) {
        loadFeed(0, function()  {
            firstFeed = document.querySelector('.feed').innerHTML;
            
        });

        loadFeed(1, function() {
            secondFeed = document.querySelector('.feed').innerHTML;
            done();
        });
    });

    /* Compare the two loaded feeds */

    it('loads new feeds', (done) => {
        expect(secondFeed !== firstFeed).toBe(true);
        done();
    });

}); 
    /* END of New Feed Selection */      
}());
