const sortTabs = require('domainlogger').sortTabs;
const {chrome} = require('jest-chrome');
// const { browser } = require('webextension-polyfill');

// global.browser = browser;

/*global.chrome = {
    browserAction: {
        setIcon: function () {}
    }
 };*/ 


describe('test', () => {
  // Mock the chrome.tabs.query() call
  const browserTabs = chrome.tabs;

  it('should sort tabs by URL', () => {
    // Create an array of tabs to pass to the sortTabs() function
    const tabs = [
      { url: 'https://www.amazon.com' },
      { url: 'https://www.google.com' },
      { url: 'https://www.facebook.com' },
    ];

    // create tabs
    tabs.forEach((tab) => {
      chrome.tabs.create(tab);
    });

    // Call the sortTabs() function
    sortTabs(chrome);

    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (sortedTabs) => {
      // Check that the tabs are sorted in the expected order
      expect(sortedTabs[0].url).toBe('https://www.amazon.com');
      expect(sortedTabs[1].url).toBe('https://www.facebook.com');
      expect(sortedTabs[2].url).toBe('https://www.google.com');
      });
  });
});
