var bubbles = [];
var bubblesCount = 2;
var xMin = 900;
var xWidth = 250;
var yMin = 400;
var yHeight = 10;

// Cloud class
function Bubble(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.dy = -1;
    this.speed = 0.6;
    this.step = 0;
    this.maxStep = Math.random()*150+50;
}

function createBubbles() {
   for (var i=0;i<bubblesCount;i++){
       // create a new image
       var img = $("<img>", {
           src:"kupla.png"
       }).addClass("bubble");
       // position
       var x = Math.random()*xWidth + xMin;
       var y = Math.random()*yHeight + yMin;
       // console.log("x = " + x + " y = " + y);
       // set offset
       img.offset( {left:x+"px", top:y+"px"} );
       // append to body
       $("body").append(img);
       // create a cloud
       bubbles[i] = new Bubble(img, x, y);
   } 
}

// move clouds
function move() {
    for (var i=0;i<bubblesCount;i++) {
        // if out of screen
        bubbles[i].step++;
        console.log(bubbles[i].step +" "+  bubbles[i].maxStep);
        if (bubbles[i].step > bubbles[i].maxStep){
            // näytä poks animaatio
            bubbles[i].step = 0;
            bubbles[i].y = Math.random()*yHeight + yMin;
            bubbles[i].x = Math.random()*xWidth + xMin;
            console.log("x = " + bubbles[i].x + " y = " + bubbles[i].y);
        }
        bubbles[i].y += bubbles[i].dy * bubbles[i].speed;
        // get cloud image and move it
        var bubbleIMG = bubbles[i].img
        bubbleIMG.offset( { left:bubbles[i].x, top:bubbles[i].y } );
       
    }
     // call again
        window.requestAnimationFrame(move);
}

$(document).ready(function () {
    createBubbles();
    window.requestAnimationFrame(move);
});