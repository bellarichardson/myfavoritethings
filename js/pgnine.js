let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/hills.png');
}

function setup() {
  createCanvas(654, 374);
}

function draw() {
  background(backgroundImage);
}