let countdown;
const timerDisplay = document.querySelector(".timer");
const input = document.querySelector("#input");
const submitButton = document.querySelector("#submit");

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      closeNetflix();
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}

function closeNetflix() {
  chrome.tabs.query({ url: "*://www.netflix.com/*" }, function (tabs) {
    if (tabs.length > 0) {
      chrome.tabs.remove(tabs[0].id);
    }
  });
}
submitButton.addEventListener("click", function() {
    const inputVal = parseFloat(input.value);
    if(isNaN(inputVal)) {
      return;
    }
  
    const seconds = Math.round(inputVal * 60);
    timer(seconds);
  });
