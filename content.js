
var generateHTML = () => {
  return `<div id="headline">
    Select the time on the popup you wanna spend on Netflix.
  </div>`
};

var generateCSS = () => {
  return `<style> 
    body {
      background-color: grey; 
    }
    #headline {
      color: black;
    }
  </style>`
};
var originalHTML = document.body.innerHTML;
var originalCSS = document.head.innerHTML;

if (window.location.hostname === "www.netflix.com" && window.location.pathname === "/browse") {
  // Code, der ausgeführt wird, wenn Sie sich auf "www.netflix.com/browse" befinden
document.body.innerHTML = generateHTML();
document.head.innerHTML = generateCSS(); 


}
// message passing from background script 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "Hello from backgroundscript!") {
    console.log(request.message);
    document.body.innerHTML = originalHTML;
    document.head.innerHTML = originalCSS;
  }
});

