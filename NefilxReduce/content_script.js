var submit = document.querySelector(".btn");
var input = document.querySelector(".input");
var span = document.querySelector(".empty")
var mySeconds;
var intervalHandle;

submit.addEventListener("click", function() {
  noValue();
  startCounter();
});

function noValue(){
  if(input.value.length === 0 || input.value === "0"){
    span.innerHTML = "Add the time you wanna spend!";
    console.log("test");
  }
  if(input.value.length > 0){
    span.innerHTML = "";
  }
}

function tick(){
  var timeDisplay = document.querySelector(".timer");
  var min = Math.floor(mySeconds/60);
  var sec = mySeconds-(min*60);
  if(sec < 10) {
    sec="0"+sec;
  }
  var message = min.toString()+":"+sec;
  timeDisplay.innerHTML = message +" min";

  if(mySeconds===0){
    timeDisplay.innerHTML ="";
    console.log("test");
  
  }
  mySeconds--;
}

function startCounter(){  
  mySeconds = input.value * 60;
  intervalHandle = setInterval(tick,1000);   
}
