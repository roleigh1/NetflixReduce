const generateHTML = () => {
  return `<div id="headline">
    Select the time on the popup you wanna spend on netflix.
  </div>`
}
const generateCSS = () => {
  return `<style> 
  body {
    background-color: grey; 
   
  }
  #headline {
    color: black;
  }
  </style> `
}
let originalHTML; 
let originalCSS; 
 // check if we open netflix and gonna block it
  if(window.location.hostname === "www.netflix.com") {
    originalHTML = document.body.innerHTML; 
    originalCSS = document.head.innerHTML; 
    document.body.innerHTML = generateHTML();
    document.head.innerHTML = generateCSS()
  }
 // message passing from background script to unblock netflix
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.message === "Hello from backgroundscript!"){
      console.log(request.message);
      // set the content to netflix
      document.body.innerHTML = originalHTML;
      document.head.innerHTML = originalCSS; 
    }
  })
    
