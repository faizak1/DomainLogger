// Method to sort tabs in lexicographic order
function sortingTabs(tab1, tab2) {
  if (tab1.url > tab2.url) {
    return 1;
  } else if (tab1.url < tab2.url) {
    return -1;
  }
  return 0;
}

// Using Chrome Tabs API
function sortTabs(tabs) {
  chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
      // Sort tabs in lexicographic/alphabetical order, to get all tabs with same domain consecutively in the list
      tabs.sort(sortingTabs);

      // Create the popup table with 3 columns for the headers
      const body = document.body,
      table1 = document.createElement('table');
      table1.style.width = '100px';
      table1.style.border = '1px solid black';
      const row = table1.insertRow();
      const col1 = row.insertCell();
      const col2 = row.insertCell();
      const col3 = row.insertCell();

      // Add headers for the popup: "Websites", "Visits/Tabs", and "Delete Tabs"
      var bold = document.createElement("STRONG");
      var header1 = document.createTextNode("WEBSITES");
      bold.appendChild(header1);
      col1.appendChild(document.body.appendChild(bold));

      var bold2 = document.createElement("STRONG");
      var header2 = document.createTextNode("VISITS");
      bold2.appendChild(header2);
      col2.appendChild(document.body.appendChild(bold2));

      var bold3 = document.createElement("STRONG");
      var header3 = document.createTextNode("DELETE TABS");
      bold3.appendChild(header3);
      col3.appendChild(document.body.appendChild(bold3));

      col1.style.border = '1px solid black';
      col2.style.border = '1px solid black';

      // All domains in the tabs list have at least 1 tab open with that domain
      countVisits = 1;

      for (let i = 0; i < tabs.length; i++) {
        let domain = (new URL(tabs[i].url));
        // Extract the domain for the current tab URL
        domain = domain.hostname;
        // if there is at least one more domain after the current one in list (to get the i+1 url) 
        if (i<tabs.length-1) {
          let domainNext = (new URL(tabs[i+1].url));
          // Extract the domain for the next tab URL in the list
          domainNext = domainNext.hostname;
          /* If current domain is the same as domain next, increment the count and do not add row to popup */
          if (domain == domainNext){
              /* Increment countVisits to get the number of tabs that share that same domain */
              countVisits++;
          } 
          /* If the current domain is different from next one, include the domain and count */
          else if (domain != domainNext) {
              // Create cell to show the unique domain under "Wesbites" attribute 
              const row = table1.insertRow();
              const col1 = row.insertCell();
              col1.appendChild(document.createTextNode(domain));
              col1.style.border = '1px solid black';

              // Create cell to show number of tabs currently open under that domain
              const col2 = row.insertCell();
              col2.appendChild(document.createTextNode(countVisits));
              col2.style.border = '1px solid black';

              // Create delete cell
              const col3 = row.insertCell();

              var a = document.createElement("a");
              a.href = "http://example.com";
              a.appendChild(document.createTextNode(domain));
              col3.appendChild(document.createTextNode("Delete "));
              col3.appendChild(a);
              
              window.addEventListener("click", function(e) {
                // listener for user input (to get the domain they click on in the third column)
                  e = e || window.event;
                  var target = e.target || e.srcElement,
                      text = target.textContent || target.innerText;   
                
                var closeTabs=[];
                for (var i=0; i<tabs.length; ++i) {
                  if(tabs[i].url.includes(text)) {    
                    closeTabs.push(tabs[i].id)
                  }
                }
                //close the tabs that contain the domain user has selected
                chrome.tabs.remove(closeTabs);
              })

              col3.style.border = '1px solid black';

              // Reset countVisits to 1 for the next unique domain          
              countVisits = 1;
            }
          } 
          /* If it is the last url in the list, there is no i+1 URL to compare to so just add domain in a new row */
        else {
          // Create cell to show the unique domain under "Wesbites" attribute
          const row = table1.insertRow();
          const col1 = row.insertCell();
          col1.appendChild(document.createTextNode(domain));
          col1.style.border = '1px solid black';

          // Create cell to show number of tabs currently open under that domain
          const col2 = row.insertCell();
          col2.appendChild(document.createTextNode(countVisits));
          col2.style.border = '1px solid black';

          // Create delete cell 
          const col3 = row.insertCell();
          var a = document.createElement("a");
          a.href = "http://example.com";
          a.appendChild(document.createTextNode(domain));
          col3.appendChild(document.createTextNode("Delete "));
          col3.appendChild(a);
          col3.style.border = '1px solid black';

          
        }

      }   
      body.appendChild(table1);
  }); 
}

sortTabs()

module.exports = {
  sortTabs,
  sortingTabs
};