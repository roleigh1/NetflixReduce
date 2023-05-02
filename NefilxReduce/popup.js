
const timerDisplay = document.querySelector(".timer");
var input = document.querySelector("#input");
const submitButton = document.querySelector("#submit");
const emptySpan = document.querySelector(".empty"); 



function closeNetflix() {
  chrome.tabs.query({ url: "*://www.netflix.com/*" }, function (tabs) {
    if (tabs.length > 0) {
      chrome.tabs.remove(tabs[0].id);
    }
  });
}
submitButton.addEventListener("click", function() {
  const inputValue = input.value.trim(); 
  const time = parseInt(inputValue);

  if (time <= 0 || isNaN(time)) {
    emptySpan.innerHTML = "Please enter the minutes.";
  } else {
    chrome.runtime.sendMessage({timeInMinutes: time, action: "executeFunction"});
    emptySpan.innerHTML = "";
  }
});
