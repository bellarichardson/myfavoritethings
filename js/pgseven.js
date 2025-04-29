let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/bellsschnitzel.png');
}

function setup() {
  createCanvas(654, 374);
}

function draw() {
  background(backgroundImage);
  
  fill(255); 
  textSize(30);
  text('doorbells & sleighbells',25,45);
  
  text('& schnitzel with noodles',310,350);
}