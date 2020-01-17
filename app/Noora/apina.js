var speed = 0;
var angle = 0;
var position;
var MAX_SPEED = 5;
var ACCELERATION = 1;
var ROTATION = 10;

// butterfly image
var frames = 3;
var frame = 1;
var frameHeight = 500;
var direction = -1;

// ready
$(document).ready(function () {
    // get butterfly position
    position = $("#suu").position();
    // animate butterfly
    setInterval(animate, 100);
    // call move function and move butterfly
    window.requestAnimationFrame(move);
    apinaPuhuu();
});

// show next butterfly image
function animate() {
  // get next "frame" of butterfly image
  var frameOffset = frame * frameHeight * (-1);
  $("#suu").css("background-position", "0px " + frameOffset + "px");
  if (direction == -1) frame++
  else frame--;
  if (frame == 0 || frame == 2) direction = -direction; 	    
}



function apinaPuhuu() {
    audio.play();
    console.log("Apina puhuu");
}

var audio = new Audio("harjtyö/etusivu.mp3");

$("#b1").click(function(){
    apinaPuhuu();
});