var things = ["objects","activities","items","pieces","subjects","people","articles","novelties","things"];

var index = 0;

let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/hills.png');
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
    createCanvas(981, 561);
  }

function draw() {
  background(backgroundImage);
  
  fill(255); 
  textSize(40); 
  text('these are a few of my favorite', 25, 200);
  text(things[index], 560, 200);
}

function mousePressed() {
  index = index + 1;

  if (index == things.length) {
    window.open('/pgsix.html');
  }
}