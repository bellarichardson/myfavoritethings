let backgroundImage;

let textColors = ['#fdf5e2', '#F29F3B', '#51DBDD', '#EFEAB9', '#E6645E', '#B1D374', '#AB83F2'];
let colorIndex = 0;

var X;
var Y;

let draggingGeese = false;
let draggingDoorbell = false;
let draggingSleigh = false;
let draggingStrudel = false;
let draggingRose = false;
let draggingKettle = false;
let draggingPackage = false;
let draggingPony = false;
let draggingKitten = false;
let draggingMittens = false;
let draggingSchnitzel = false;

let geeseX,geeseY, doorbellX,doorbellY, sleighX,sleighY, strudelX,strudelY, roseX,roseY, kettleX,kettleY, packageX,packageY, ponyX,ponyY, kittenX,kittenY, mittensX,mittensY, schnitzelX,schnitzelY;


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

  geeseX = 0;
  geeseY = height/80;
  doorbellX = width/5;
  doorbellY = height/30;
  sleighX = width/5;
  sleighY = height/12;
  strudelX = width/2.5;
  strudelY = height/30;
  roseX = width/1.4;
  roseY = height/30;
  kettleX = width-545/7;
  kettleY = height/80;
  packageX = 0;
  packageY = height/1.18;
  ponyX = width/5;
  ponyY = height/1.18;
  kittenX = width/2.5;
  kittenY = height/1.18;
  mittensX = width/1.6;
  mittensY = height/1.18;
  schnitzelX = width-447/4;
  schnitzelY = height/1.18;

  textColor = color(textColors[colorIndex]);
}

function draw() {
  background('#B1D374');
  image(backgroundImage,0,height/6.5,981,561);

  
  textFont('scale-variable');
  fill(textColor); 
  textSize(50);
  textAlign(CENTER, CENTER);
  text('these are a few of my favorite things',981/2, windowHeight/2)


  //fav things
  //TOP
  image(geese, geeseX, geeseY,715/5.5,553/5.5);
  image(doorbell, doorbellX,doorbellY,204/5,203/5);
  image(sleigh,sleighX,sleighY,528/5,151/5);
  image(strudel,strudelX,strudelY,475/4,221/4);
  image(rose,roseX,roseY,389/7,698/7);
  image(kettle,kettleX,kettleY,545/7,689/7);

  //BOTTOM
  image(package,packageX,packageY,576/5.5,526/5.5);
  image(pony,ponyX,ponyY,473/5.5,597/5.5);
  image(kitten,kittenX,kittenY,877/6,509/6);
  image(mittens,mittensX,mittensY,1088/7.5,739/7.5);
  image(schnitzel,schnitzelX,schnitzelY,447/4.5,448/4.5);

  //mouseDragged();

}

//DRAGGING ASSETS
function mousePressed() { //ChatGPT helped with the code below
    // Check if mouse is inside geese image
  if (mouseX >= geeseX && mouseX <= geeseX + 715/5.5 &&
    mouseY >= geeseY && mouseY <= geeseY + 553/5.5) {
  draggingGeese = true;
}

// Check if mouse is inside doorbell image
if (mouseX >= doorbellX && mouseX <= doorbellX + 204/5 &&
    mouseY >= doorbellY && mouseY <= doorbellY + 203/5) {
  draggingDoorbell = true;
}

// Check if mouse is inside sleigh image
if (mouseX >= sleighX && mouseX <= sleighX + 528/5 &&
  mouseY >= sleighY && mouseY <= sleighY + 151/5) {
draggingSleigh = true;
}
  
// Check if mouse is inside strudel image
if (mouseX >= strudelX && mouseX <= strudelX + 475/4 &&
  mouseY >= strudelY && mouseY <= strudelY + 221/4) {
draggingStrudel = true;
}

  // Check if mouse is inside rose image
  if (mouseX >= roseX && mouseX <= roseX + 389/7 &&
    mouseY >= roseY && mouseY <= roseY + 698/7) {
  draggingRose = true;
}

// Check if mouse is inside kettle image
if (mouseX >= kettleX && mouseX <= kettleX + 545/7 &&
    mouseY >= kettleY && mouseY <= kettleY + 689/7) {
  draggingKettle = true;
}

// Check if mouse is inside package image
if (mouseX >= packageX && mouseX <= packageX + 576/5.5 &&
  mouseY >= packageY && mouseY <= packageY + 526/5.5) {
draggingPackage = true;
}

// Check if mouse is inside pony image
if (mouseX >= ponyX && mouseX <= ponyX + 473/5.5 &&
  mouseY >= ponyY && mouseY <= ponyY + 597/5.5) {
draggingPony = true;
}
  
// Check if mouse is inside kitten image
if (mouseX >= kittenX && mouseX <= kittenX + 877/6 &&
  mouseY >= kittenY && mouseY <= kittenY + 509/6) {
draggingKitten = true;
}

// Check if mouse is inside mittens image
  if (mouseX >= mittensX && mouseX <= mittensX + 1088/7.5 &&
      mouseY >= mittensY && mouseY <= mittensY + 739/7.5) {
    draggingMittens = true;
  }

  // Check if mouse is inside schnitzel image
  if (mouseX >= schnitzelX && mouseX <= schnitzelX + 447/4.5 &&
    mouseY >= schnitzelY && mouseY <= schnitzelY + 448/4.5) {
  draggingSchnitzel = true;
}

  colorIndex = (colorIndex + 1) % textColors.length;
  textColor = color(textColors[colorIndex]);
  if (colorIndex == textColors.length) {
    window.open('index.html', '_self');
  }

}

function mouseDragged() {
  if (draggingGeese) {
    geeseX = mouseX - 130 / 2;
    geeseY = mouseY - 100.55 / 2;
  }

  if (draggingDoorbell) {
    doorbellX = mouseX - 40.8 / 2;
    doorbellY = mouseY - 40.6 / 2;
  }

  if (draggingSleigh) {
    sleighX = mouseX - 105.6 / 2;
    sleighY = mouseY - 30.2 / 2;
  }

  if (draggingStrudel) {
    strudelX = mouseX - 118.75 / 2;
    strudelY = mouseY - 55.25 / 2;
  }
  
  if (draggingRose) {
    roseX = mouseX - 55.57 / 2;
    roseY = mouseY - 99.71 / 2;
  }

  if (draggingKettle) {
    kettleX = mouseX - 77.86 / 2;
    kettleY = mouseY - 98.43 / 2;
  }
  
  if (draggingPackage) {
    packageX = mouseX - 104.73 / 2;
    packageY = mouseY - 95.64 / 2;
  }

  if (draggingPony) {
    ponyX = mouseX - 86 / 2;
    ponyY = mouseY - 108.55 / 2;
  }

  if (draggingKitten) {
    kittenX = mouseX - 146.17 / 2;
    kittenY = mouseY - 84.83 / 2;
  }
  
  if (draggingMittens) {
    mittensX = mouseX - 145.1 / 2;
    mittensY = mouseY - 98.5 / 2;
  }

  if (draggingSchnitzel) {
    schnitzelX = mouseX - 99.3 / 2;
    schnitzelY = mouseY - 99.6 / 2;
  }


}

function mouseReleased() {
  draggingGeese = false;
  draggingDoorbell = false;
  draggingSleigh = false;
  draggingStrudel = false;
  draggingRose = false;
  draggingKettle = false;
  draggingPackage = false;
  draggingPony = false;
  draggingKitten = false;
  draggingMittens = false;
  draggingSchnitzel = false;
}
