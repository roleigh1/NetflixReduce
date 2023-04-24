
// we open the html file when we visting netflix.
chrome.webNavigation.onCommitted.addListener(function(details) {
    if(details.url.startsWith("https://www.netflix.com/")) {
      chrome.tabs.create({url: chrome.runtime.getURL("popup.html")});
    }
  });
  
 chrome.runtime.onInstalled.addListener(function() {
    console.log("in the background.")
 })