let hills;

function preload(){
  hills = loadImage('/img/combined/hills.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, 561);
}

function draw() {
  background(hills);
}
