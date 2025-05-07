let backgroundImage;

function preload(){
  backgroundImage = loadImage('geesemoon.png');
  geese = loadImage('geese.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
  
  background('#753FD3');
  image(backgroundImage,0,height/6.5,981,561);
}


function draw() {
  fill('#753FD3');
  noStroke();
  rect(0,0,981,windowHeight/8);
  rect(0,700,981,771);

  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);
  text('wild geese that fly',-mouseY/2+380,windowHeight/9);
  
  text('with the moon on their wings',mouseY/2+40,windowHeight/1.1);
}

function mousePressed() {
  image(geese,mouseX-110,mouseY-85,420,235.5);
}