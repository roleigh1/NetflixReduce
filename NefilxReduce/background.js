
var mySeconds;

chrome.windows.onRemoved.addListener(function(windowId) {
  chrome.storage.local.set({'countdownSeconds': mySeconds});
});
