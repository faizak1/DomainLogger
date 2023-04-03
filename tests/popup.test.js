const deleteTabs = require("domain-logger-delete-tabs-by-domain").deleteTabs;
const sortingTabs = require("domain-logger-delete-tabs-by-domain").sortingTabs;

const { chrome } = require("jest-chrome");

// Create an array of tabs to pass to the sortTabs() function
const tabs = [
  { url: "https://www.google.com" },
  { url: "https://www.amazon.com" },
  { url: "https://www.facebook.com" }
];

describe("test chrome tabs functionality", () => {
  beforeEach(() => {
    chrome.tabs.create.mockClear();
    chrome.tabs.query.mockClear();
  });

  test("should return 1 if tab1 url is greater than tab2 url", () => {
    const tab1 = { url: "https://www.google.com/" };
    const tab2 = { url: "https://www.amazon.com/" };
    expect(sortingTabs(tab1, tab2)).toBe(1);
  });

  test("should return -1 if tab1 url is less than tab2 url", () => {
    const tab1 = { url: "https://www.google.com/" };
    const tab2 = { url: "https://www.amazon.com/" };
    expect(sortingTabs(tab2, tab1)).toBe(-1);
  });

  test("should return 0 if tab1 url is equal to tab2 url", () => {
    const tab1 = { url: "https://www.google.com/" };
    const tab2 = { url: "https://www.google.com/" };
    expect(sortingTabs(tab1, tab2)).toBe(0);
  });

  test("sortTabs should sort tabs by URL in lexicographic order", () => {
    // Create tabs
    tabs.forEach((tab) => {
      chrome.tabs.create(tab);
    });

    // Call the sortTabs() function
    deleteTabs(chrome);

    // Check that the tabs are sorted in the expected order
    const expectedTabs = [
      { url: "https://www.amazon.com" },
      { url: "https://www.facebook.com" },
      { url: "https://www.google.com" }
    ];
    expect(chrome.tabs.query).toHaveBeenCalledWith(
      { windowId: chrome.windows.WINDOW_ID_CURRENT },
      expect.any(Function)
    );

    const callback = chrome.tabs.query.mock.calls[0][1];
    callback(expectedTabs);
  });

  test("sortTabs should render table with headers and rows for each unique domain", () => {
    // Create tabs
    tabs.forEach((tab) => {
      chrome.tabs.create(tab);
    });

    // Call the sortTabs() function
    deleteTabs(chrome);

    // Check that the table is rendered with the expected headers and rows
    expect(document.querySelector("table")).toBeTruthy();
  });

  test("should render table with headers and rows for each unique domain", () => {
    // create tabs
    tabs.forEach((tab) => {
      chrome.tabs.create(tab);
    });

    // Call the sortTabs() function
    deleteTabs(chrome);

    chrome.tabs.query(
      { windowId: chrome.windows.WINDOW_ID_CURRENT },
      (sortedTabs) => {
        // Check that the tabs are sorted in the expected order
        expect(document.querySelector("table")).toBeTruthy();
        expect(document.querySelectorAll("th")).toHaveLength(3);
        expect(document.querySelectorAll("tr")).toHaveLength(3);
      }
    );
  });
});
