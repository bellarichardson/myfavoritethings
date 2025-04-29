let backgroundImage;

function preload(){
  backgroundImage = loadImage('../img/combined/geesemoon.png');
  geese = loadImage('../img/geese.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
  
  image(backgroundImage,0,height/6.5,981,561);
}


function draw() {
  textFont('scale-variable');
  fill(255); 
  textSize(40);
  text('wild geese that fly',10,windowHeight/9);
  
  text('with the moon on their wings',600,windowHeight/1.1);
}

function mousePressed() {
  image(geese,mouseX-110,mouseY-85,420,235.5);
}