
// we open the html file when we visting netflix.
chrome.webNavigation.onCommitted.addListener(function(details) {
  if (details.url.startsWith("https://www.netflix.com/")) {
     chrome.windows.create({url: chrome.runtime.getURL("popup.html"), type:"popup", width : 400, height: 600});
  }
});



 chrome.runtime.onInstalled.addListener(function() {
    console.log("in the background.")
 })
 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "executeFunction") {
    messageToContent()
  }
});

// function to send a message to content script 
function messageToContent() {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: "Hallo von Hintergrundskript!"})
});
  
}
