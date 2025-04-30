let backgroundImage;

function preload(){
  backgroundImage = loadImage('../bellsschnitzel.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
}

function draw() {
  background('#5A81BA');
  image(backgroundImage,0,height/6.5,981,561);
  
  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);
  text('doorbells & sleighbells',10,windowHeight/9);
  
  text('& schnitzel with noodles',500,windowHeight/1.1);
}