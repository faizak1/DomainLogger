function sortTabs(tab1, tab2) {
    if (tab1.url > tab2.url) {
      return 1;
    } else if (tab1.url < tab2.url) {
      return -1;
    }
    return 0;
}