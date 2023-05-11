
let generateHTML = () => {
  return `<div id="headline">
    Select the time on the popup you wanna spend on Netflix.
  </div>`
};

let generateCSS = () => {
  return `<style> 
    body {
      background-color: grey; 
    }
    #headline {
      color: black;
    }
  </style>`
};

let originalHTML = document.body.innerHTML;
let originalCSS = document.head.innerHTML;

document.addEventListener("DOMContentLoaded", function(event) { 
// message passing from background script 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "Block content!") {
    console.log(request.message);
    originalHTML = document.body.innerHTML; 
    originalCSS = document.head.innerHTML; 
    document.body.innerHTML = generateHTML();
    document.head.innerHTML = generateCSS();
  }

  if (request.message === "Hello from backgroundscript!") {
    console.log(request.message);
    document.body.innerHTML = originalHTML;
    document.head.innerHTML = originalCSS;
  }
});
});
