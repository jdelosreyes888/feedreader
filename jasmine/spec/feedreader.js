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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds variable are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('allFeeds have a valid url', () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
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


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu',() => {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var body = document.querySelector('body');
        it('hides by default', () => {
            expect(body.className).toBe('menu-hidden');
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         //var xp1 = document.querySelector('body');
         var menu = document.querySelector('.menu-icon-link');
         
        it('changes when clicked', () => {
            menu.click();
            expect(body.className).toBe('');
            menu.click();
            expect(body.className).toBe('menu-hidden');
        });  
    });

    /* End of The menu */ 
    
    
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',() => {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        let feeds; 

        beforeEach((done) => {
            loadFeed(0, () => {
                feeds = document.querySelector('.feed');
                done();
            });
        });

        it('has at least one entry', (done) => {
            expect(feeds.childElementCount).toBeGreaterThan(0);
            done();
        });         
    }); 
    /* END of Initial Entries */

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',() => {

    let firstFeed, secondFeed;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    beforeEach((done) => {
        loadFeed(0, () => {
            firstFeed = document.querySelector('.feed').innerHTML;
        });

        loadFeed(1, () => {
            secondFeed = document.querySelector('.feed').innerHTML
            done();
        });
    });

    it('loads new feeds', (done) => {
        expect(secondFeed !== firstFeed).toBe(true);
        done();
    });

}); 
    /* END of New Feed Selection */      
}());