const generateHTML = () => {
  return `<div id="headline">
    Select the time on the popup you wanna spend on netflix.
  </div>`
}
const generateCSS = () => {
  return `<style> 

  #headline {
    color: black;
  }
  </style> `
}
  if(window.location.hostname === "www.netflix.com") {
    document.body.innerHTML = generateHTML();
    document.head.innerHTML = generateCSS();
  }


console.log("content script says hello ")

