let backgroundImage;

var ponyX = width/5;
var ponyY = height/1.18;
var strudelX = width/2.5;
var strudelY = height/30;

var X;
var Y;

let draggingPony = false;
let draggingStrudel = false;


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

  frameRate(12);
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
  image(geese, 0, height/80,715/5.5,553/5.5);
  image(doorbell, width/5,height/30,204/5,203/5);
  image(sleigh,width/5,height/12,528/5,151/5);
  image(strudel,strudelX,strudelY,475/4,221/4);
  image(rose,width/1.4,height/80,389/7,698/7);
  image(kettle,width-545/7,height/80,545/7,689/7);

  //BOTTOM
  image(package,0,height/1.18,576/5.5,526/5.5);
  image(pony,ponyX,ponyY,473/5.5,597/5.5);
  image(kitten,width/2.5,height/1.18,877/6,509/6);
  image(mittens,width/1.6,height/1.18,1088/7.5,739/7.5);
  image(schnitzel,width-447/4,height/1.18,447/4.5,448/4.5);

  mouseDragged();

}

//DRAGGING ASSETS
function mousePressed() { //ChatGPT helped with the code below
  // Check if mouse is inside pony image
  if (mouseX >= ponyX && mouseX <= ponyX + 473/5.5 &&
      mouseY >= ponyY && mouseY <= ponyY + 597/5.5) {
    draggingPony = true;
  }

  // Check if mouse is inside strudel image
  if (mouseX >= strudelX && mouseX <= strudelX + 475/4 &&
      mouseY >= strudelY && mouseY <= strudelY + 221/4) {
    draggingStrudel = true;
  }
}

function mouseDragged() {
  if (draggingPony) {
    ponyX = mouseX - 86 / 2;
    ponyY = mouseY - 108.55 / 2;
  }

  if (draggingStrudel) {
    strudelX = mouseX - 118.75 / 2;
    strudelY = mouseY - 55.25 / 2;
  }
}

function mouseReleased() {
  draggingPony = false;
  draggingStrudel = false;
}
