let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/package.png');
  package = loadImage('/img/paperpackage.png');
}

function setup() {
  createCanvas(654, 374);
  background(backgroundImage);
  frameRate(30);
}

function draw() {
  package.resize(195,179);
  image(package,mouseX-100,mouseY-75);
  
  fill(255); 
  textSize(30);
  text('brown paper packages',25,45);
  
  text('tied up with string',370,345);
}