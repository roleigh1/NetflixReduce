let timerRunning = false; 
// we open the html file when we visting netflix.
chrome.webNavigation.onCommitted.addListener(function(details) {
  if (details.url.startsWith("https://www.netflix.com/") && !timerRunning) {
     chrome.windows.create({url: chrome.runtime.getURL("popup.html"), type:"popup", width : 400, height: 600});
  }
});
// We log something in the console to see the background script works 
 chrome.runtime.onInstalled.addListener(function() {
    console.log("in the background.")
 })
 // message passing between popup script and background script 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var timeMinutes = request.timeInMinutes;
  console.log("Input-Value:", timeMinutes);
  if (request.action == "executeFunction") {
    messageToContent()
    startTimer(request.timeInMinutes);
  } 
});


// function to send a message passing to contentscript
function messageToContent() {
chrome.tabs.query({active: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: "Hello from backgroundscript!"})
});
}

// logic timer
var timerId = 0; 
var timerLeft = 0; 

function startTimer(minutes) {
  timerLeft = minutes *60;
  timerId = setInterval(updateTimer,1000); 
}
function updateTimer() {
  timerLeft -= 1;
  if(timerLeft <= 0) {
    clearInterval(timerId);
    chrome.runtime.sendMessage({timerFinished: true}); 
    console.log("Timer abgelaufen!");
    timerRunning = false; 
  } else {
    chrome.runtime.sendMessage({timerValue: formatTime(timerLeft)});
    console.log("Verbleibende Zeit:" + formatTime(timerLeft));
  }
}
function formatTime(timeInSeconds) {
 var minutes = Math.floor(timeInSeconds / 60); 
 var seconds = timeInSeconds % 60; 
 return padZero(minutes) + ":" + padZero(seconds);
};
function padZero(num) {
  if(num < 10) {
    return "0" + num; 
  } else {
    return "" + num; 
  }
}
