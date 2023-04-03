const assert = require("assert");
const deleteTabs = require("domain-logger-delete-tabs-by-domain").deleteTabs;

const { chrome } = require("jest-chrome");

const tabs = [
  { url: "https://www.google.com" },
  { url: "https://www.google.com/maps" },
  { url: "https://www.facebook.com" },
  { url: "https://www.twitter.com" },
  { url: "https://www.google.com/images" },
  { url: "https://www.google.com/news" },
  { url: "https://www.facebook.com/messages" }
];

describe("deleteTabs", () => {
  beforeEach(() => {
    // Mock chrome.tabs.query to return sample tabs
    chrome.tabs.query = jest.fn((options, callback) => {
      callback(tabs);
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should sort tabs by domain, get tab count for domains, and display them in a table", () => {
    // Create tabs
    tabs.forEach((tab) => {
      chrome.tabs.create(tab);
    });

    // Set up a fake DOM element to append the table to
    const body = document.createElement("body");
    document.body = body;

    deleteTabs(chrome);

    // Check that chrome.tabs.query was called with the correct options
    expect(chrome.tabs.query).toHaveBeenCalledWith(
      { windowId: chrome.windows.WINDOW_ID_CURRENT },
      expect.any(Function)
    );

    // Check that the table was created with the correct headers and rows
    const table = document.querySelector("table");
    expect(table).toBeTruthy();

    const headers = table.querySelectorAll("strong");
    expect(headers.length).toBe(3);
    expect(headers[0].textContent).toBe("DOMAINS");
    expect(headers[1].textContent).toBe("VISITS/TAB COUNT");
    expect(headers[2].textContent).toBe("DELETE TABS");

    const rows = table.querySelectorAll("tr");
    expect(rows.length).toBe(4); // One row for each unique domain
    expect(rows[1].textContent).toContain("www.facebook.com");
    expect(rows[1].textContent).toContain("2"); // 2 tabs with www.facebook.com
    expect(rows[2].textContent).toContain("www.google.com");
    expect(rows[2].textContent).toContain("4"); // 4 tabs with www.google.com
    expect(rows[3].textContent).toContain("twitter.com");
    expect(rows[3].textContent).toContain("1"); // 1 tab with twitter.com
  });
});
