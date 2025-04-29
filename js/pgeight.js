let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/geesemoon.png');
  geese = loadImage('/img/geese.png');
}

function setup() {
  createCanvas(654, 374);
  
  background(backgroundImage);
}


function draw() {
  fill(255); 
  textSize(30);
  text('brown geese that fly',25,45);
  
  text('with the moon on their wings',250,350);
}

function mousePressed() {
  image(geese,mouseX-110,mouseY-85,280,157);
}