
// we open the html file when we visting netflix.
chrome.webNavigation.onCommitted.addListener(function(details) {
  if (details.url.startsWith("https://www.netflix.com/")) {
     chrome.windows.create({url: chrome.runtime.getURL("popup.html"), type:"popup", width : 400, height: 600});
  }
});
// We log something in the console to see the background script works 
 chrome.runtime.onInstalled.addListener(function() {
    console.log("in the background.")
 })
 // message passing between popup script and background script 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const timeMinutes = request.timeInMinutes;
  console.log("Input-Value:", timeMinutes);
  if (request.action == "executeFunction") {
    messageToContent()
  }
});


// function to send a message passing to contentscript
function messageToContent() {
chrome.tabs.query({active: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: "Hello from backgroundscript!"})
});
  
}
