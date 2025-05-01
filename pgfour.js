let backgroundImage;

function preload(){
  backgroundImage = loadImage('package.png');
  package = loadImage('paperpackage.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
  background('#EFEAB9'); //#6B4360
  image(backgroundImage,0,height/6.5,981,561);
  frameRate(30);
}

function draw() {
  package.resize(292.5,268.5);
  image(package,mouseX-100,mouseY-75);
  
  textFont('scale-variable');
  fill('#EFEAB9'); 
  textSize(40);
  text('brown paper packages',10,windowHeight/9);
  
  text('tied up with string',620,windowHeight/1.1);
}