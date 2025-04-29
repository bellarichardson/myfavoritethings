let backgroundImage;

function preload(){
  backgroundImage = loadImage('../img/combined/bellsschnitzel.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
}

function draw() {
  image(backgroundImage,0,height/6.5,981,561);
  
  textFont('scale-variable');
  fill(255); 
  textSize(40);
  text('doorbells & sleighbells',10,windowHeight/9);
  
  text('& schnitzel with noodles',600,windowHeight/1.1);
}