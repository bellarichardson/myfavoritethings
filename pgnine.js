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
  image(geese, width/10, height/80,715/5,553/5);
  image(doorbell, width/4,height/80,204/5,203/5);
  image(sleigh,width/3.5,height/80,528/5,151/5);
  image(strudel,width/3,height/80,475/5,221/5);
  image(rose,width/1.5,height/80,389/5,698/5);
  image(kettle,width/1.2,height/80,545/5,689/5);

  //BOTTOM
  image(package,width/10,height/1.18,576/5,526/5);
  image(pony,width/4,height/1.18,473/5,597/5);
  image(kitten,width/3,height/1.18,877/5,509/5);
  image(mittens,width/2,height/1.18,1088/5,739/5);
  image(schnitzel,width/1.2,height/1.18,447/5,448/5);
}
