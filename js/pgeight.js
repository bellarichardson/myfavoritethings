let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/geesemoon.png');
  geese = loadImage('/img/geese.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, 561);
  
  background(backgroundImage);
}


function draw() {
  fill(255); 
  textSize(40);
  text('wild geese that fly',25,45);
  
  text('with the moon on their wings',250,350);
}

function mousePressed() {
  image(geese,mouseX-110,mouseY-85,420,235.5);
}