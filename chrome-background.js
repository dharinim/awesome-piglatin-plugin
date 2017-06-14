chrome.browserAction.onClicked.addListener(function onIconClick(tab) {
  chrome.tabs.executeScript(null, {file: 'piglatin.js'}, function onDone() {
    /// call the replace method
    chrome.tabs.executeScript(null, {file: 'chrome-piglatin.js'}, function onD() {
      chrome.tabs.executeScript(null, {
        code: 'replaceDOMwithPiglatin(); console.log("Done");'
      });
    });
  });
});