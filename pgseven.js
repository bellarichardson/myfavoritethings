let backgroundImage;

var plates = ["nobite", "bite1", "bite2", "bite3", "bite4", "bite5", "bite6", "bite7", "bite8"];
var currentImage;

let string = `doorbells & sleighbells`;
let string2 = '& schnitzel with noodles';

let currentCharacter1 = 0;
let currentCharacter2 = 0;
let startString2 = false;

function preload(){
  backgroundImage = loadImage('bellsschnitzel.png');

  nobite = loadImage("bellsschnitzel.png");
  bite1 = loadImage("biteone.png");
  bite2 = loadImage("bitetwo.png");
  bite3 = loadImage("bitethree.png");
  bite4 = loadImage("bitefour.png");
  bite5 = loadImage("bitefive.png");
  bite6 = loadImage("bitesix.png");
  bite7 = loadImage("biteseven.png");
  bite8 = loadImage("biteeight.png");
  currentImage = nobite;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);

  setTimeout(() => {
    startString2 = true;
  }, 5400);
}

function draw() {
  background('#5A81BA');
  image(backgroundImage,0,height/6.5,981,561);

  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);

  image(currentImage, 0, height/6.5, 981,561);

  let currentString1 = string.substring(0, currentCharacter1);
  text(currentString1, 10, windowHeight/9);
  if (currentCharacter1 < string.length) {
    currentCharacter1 += 0.1;
  }

  if (startString2) {
    let currentString2 = string2.substring(0, currentCharacter2);
    text(currentString2, 500, windowHeight/1.1);
    if (currentCharacter2 < string2.length) {
      currentCharacter2 += 0.1;
    }
  }
}

function mousePressed() {
  if (plates == 0) {
    currentImage = bite1;
  } else if (plates == 1) {
    currentImage = bite2;
  } else if (plates == 2) {
    currentImage = bite3;
  } else if (plates == 3) {
    currentImage = bite4;
  } else if (plates == 4) {
    currentImage = bite5;
  } else if (plates == 5) {
    currentImage = bite6;
  } else if (plates == 6) {
    currentImage = bite7;
  } else if (plates == 7) {
    currentImage = bite8;
  } else {
    currentImage = nobite;
    plates = -1;
  }
  plates = plates + 1;
}


