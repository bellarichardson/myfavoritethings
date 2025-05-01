let backgroundImage;

function preload(){
  backgroundImage = loadImage('hills.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
}

function draw() {
  background('#B1D374');
  image(backgroundImage,0,height/6.5,981,561);

  
  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);
  textAlign(CENTER, CENTER);
  text('these are a few of my favorite things',981/2, windowHeight/2)
}