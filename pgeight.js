let backgroundImage;

function preload(){
  backgroundImage = loadImage('../geesemoon.png');
  geese = loadImage('../geese.png');
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
  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);
  text('wild geese that fly',10,windowHeight/9);
  
  text('with the moon on their wings',410,windowHeight/1.1);
}

function mousePressed() {
  image(geese,mouseX-110,mouseY-85,420,235.5);
}