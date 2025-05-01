let backgroundImage;
let rainwhiskers;
let pfont;

function preload(){
  backgroundImage = loadImage('../sansrainwhiskers.png');
  rainwhiskers = loadImage('../rainwhiskers.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
}

function draw() {
  background('#C9D6AC');
  //imageMode(CENTER);
  image(backgroundImage, 0,height/6.5,981,561);
  
  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);
  
  drop();
}

function drop(){
  image(rainwhiskers,0,mouseX/3 - 220, 1005,577.5);

  text('raindrops on roses',mouseX/3-340,windowHeight/9);
  
  text('& whiskers on kittens',-mouseX/3+900,windowHeight/1.1);
}