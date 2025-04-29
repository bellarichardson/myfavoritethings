let backgroundImage;

function preload(){
  backgroundImage = loadImage('../img/combined/hills.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
}

function draw() {
  image(backgroundImage,0,height/6.5,981,561);
}