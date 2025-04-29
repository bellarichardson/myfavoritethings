let backgroundImage;
let rainwhiskers;

function preload(){
  backgroundImage = loadImage('/img/combined/sansrainwhiskers.png');
  rainwhiskers = loadImage('/img/combined/rainwhiskers.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, 561);
}

function draw() {
  background(backgroundImage);
    
  //fill(255); 
  //textSize(30);
  //text('raindrops on roses',25,45);
  
  //text('& whiskers on kittens',350,350);
  
  drop();
}

function drop(){
  
  
  image(rainwhiskers,0,-mouseX/3, 1005,577.5);
}