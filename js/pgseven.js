let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/bellsschnitzel.png');
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
  text('doorbells & sleighbells',25,45);
  
  text('& schnitzel with noodles',310,350);
}