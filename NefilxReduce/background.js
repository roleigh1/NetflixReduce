
// we open the html file when we visting netflix.
chrome.webNavigation.onCommitted.addListener(function(details) {
  if (details.url.startsWith("https://www.netflix.com/")) {
     chrome.windows.create({url: chrome.runtime.getURL("popup.html"), type:"popup", width : 400, height: 600});
     chrome.contentSettings.javascript.set({
      primaryPattern: "*://*.netflix.com/*", 
      setting: "block"
    });
  }
});
  
 chrome.runtime.onInstalled.addListener(function() {
    console.log("in the background.")
 })
 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "executeFunction") {
    myFunction();
  }
});

// function to be executed
function myFunction() {
  console.log("test");
}
