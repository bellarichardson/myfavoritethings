let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/package.png');
  package = loadImage('/img/paperpackage.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, 561);
  background(backgroundImage);
  frameRate(30);
}

function draw() {
  package.resize(292.5,268.5);
  image(package,mouseX-100,mouseY-75);
  
  fill(255); 
  textSize(40);
  text('brown paper packages',25,45);
  
  text('tied up with string',370,345);
}