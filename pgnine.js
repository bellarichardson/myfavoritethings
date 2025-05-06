let backgroundImage;

let geese;
let package;;
let kettle;
let mittens;
let doorbell;
let sleigh;
let schnitzel;
let pony;
let strudel;
let kitten;
let rose;


function preload(){
  backgroundImage = loadImage('hills.png');
  
  geese = loadImage('wildgeese.png');
  package = loadImage('paperpackage.png');
  kettle = loadImage('copperkettles.png');
  mittens = loadImage('mittens.png');
  doorbell = loadImage('doorbell.png');
  sleigh = loadImage('sleighbells.png');
  schnitzel = loadImage('schnitzel.png');
  pony = loadImage('pony.png');
  strudel = loadImage('strudel.png');
  kitten = loadImage('whiskersonkittens.png');
  rose = loadImage('raindropsonroses.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);

  
}

function draw() {
  background('#B1D374');
  image(backgroundImage,0,height/6.5,981,561);

  
  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(50);
  textAlign(CENTER, CENTER);
  text('these are a few of my favorite things',981/2, windowHeight/2)

  //fav things
  //TOP
  image(geese, width/5, 0);
  image(doorbell, width/5,0);
  image(sleigh,width/5,0);
  image(strudel,width/5,0);
  image(rose,width/5,0);
  image(kettle,width/5,0);

  //BOTTOM
  image(package,width/5,height/7);
  image(pony,width/5,height/7);
  image(kitten,width/5,height/7);
  image(mittens,width/5,height/7);
  image(schnitzel,width/5,height/7);
}