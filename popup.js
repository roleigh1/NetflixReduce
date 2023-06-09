
var input = document.querySelector("#input");
const submitButton = document.querySelector("#submit");
const emptySpan = document.querySelector(".empty"); 



submitButton.addEventListener("click", function() {
  const inputValue = input.value.trim(); 
  const time = parseInt(inputValue);

  if (time <= 0 || isNaN(time)) {
    emptySpan.innerHTML = "Please enter a positive number of minutes.";
  } else {
    chrome.runtime.sendMessage({timeInMinutes: time, action: "executeFunction"});
    emptySpan.innerHTML = "";
  }
})
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.timerFinished) {
    closeNetflix(); 
    document.querySelector(".timer").textContent = "The time is out, go back to work!"
  }
})
chrome.runtime.onMessage.addListener(function(request,sender, sendResponse) {
  if(request.timerValue) {
    document.querySelector(".timer").textContent = request.timerValue;
  }
})
function closeNetflix() {
  chrome.tabs.query({ url: "*://www.netflix.com/*" }, function (tabs) {
    if (tabs.length > 0) {
      chrome.tabs.remove(tabs[0].id);
    }
  });
}
