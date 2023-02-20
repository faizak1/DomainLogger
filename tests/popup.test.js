const sortTabs = require('../popup').sortTabs;
const { browser } = require('webextension-polyfill');

global.browser = browser;

/*global.chrome = {
    browserAction: {
        setIcon: function () {}
    }
 };*/ 

jest.mock('chrome', () => ({
  tabs: {
    query: (params, callback) => {
      const tabs = [
        { id: 1, url: 'http://example.com' },
        { id: 2, url: 'http://example.com/page2' },
        { id: 3, url: 'http://example.com/page3' },
      ];
      callback(tabs);
    },
  },
}));

describe('popup', () => {
  it('should sort tabs by URL', () => {
  });
});


describe('test', () => {
      // Mock the chrome.tabs.query() call
      browser.tabs.query = jest.fn().mockImplementation((params, callback) => {
        callback(tabs);
      });
  it('should sort tabs by URL', () => {
    // Create an array of tabs to pass to the sortTabs() function
    const tabs = [
      { url: 'https://www.amazon.com' },
      { url: 'https://www.google.com' },
      { url: 'https://www.facebook.com' },
    ];

    // Call the sortTabs() function with the tabs array
    const sortedTabs = tabs.sort(sortTabs);

    // Check that the tabs are sorted in the expected order
    expect(sortedTabs[0].url).toBe('https://www.amazon.com');
    expect(sortedTabs[1].url).toBe('https://www.facebook.com');
    expect(sortedTabs[2].url).toBe('https://www.google.com');


    const sortedTabs2 = sortTabs();

    expect(sortedTabs2[0].url).toBe('https://www.amazon.com');
    expect(sortedTabs2[1].url).toBe('https://www.facebook.com');
    expect(sortedTabs2[2].url).toBe('https://www.google.com');
  });
});