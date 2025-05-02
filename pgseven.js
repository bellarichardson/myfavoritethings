let backgroundImage;

var plates = ["nobite", "bite1", "bite2", "bite3", "bite4", "bite5", "bite6", "bite7", "bite8"];
var currentImage;

let string = `doorbells & sleighbells`;
let string2 = '& schnitzel with noodles';

let currentCharacter = 0;

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

  
}

function draw() {
  background('#5A81BA');
  image(backgroundImage,0,height/6.5,981,561);

  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);
  //text('doorbells & sleighbells',10,windowHeight/9);
  
  //text('& schnitzel with noodles',500,windowHeight/1.1);

  image(currentImage, 0, height/6.5, 981,561);

  
  let currentString = string.substring(0, currentCharacter);
  push();
  //textSize(12);
  //textFont(`Courier`);
  //textAlign(LEFT, TOP);
  text(currentString, 10, windowHeight/9);
  pop();

  
  let currentString2 = string2.substring(0, currentCharacter);
  push();
  //textSize(12);
  //textFont(`Courier`);
  //textAlign(LEFT, TOP);
  text(currentString2, 500, windowHeight/1.1);
  pop();

  currentCharacter += 0.1;
}

function mousePressed() {

  if (plates == 0) {
    currentImage = bite1;
    console.log("bite1");
  } else if (plates == 1) {
    currentImage = bite2;
    console.log("bite2");
  } else if (plates == 2) {
    currentImage = bite3;
    console.log("bite3");
  } else if (plates == 3) {
    currentImage = bite4;
    console.log("bite4");
  } else if (plates == 4) {
    currentImage = bite5;
    console.log("bite5");
  } else if (plates == 5) {
    currentImage = bite6;
    console.log("bite6");
  } else if (plates == 6) {
    currentImage = bite7;
    console.log("bite7");
  } else if (plates == 7) {
    currentImage = bite8;
    console.log("bite8");
  } else {
    currentImage = nobite;
    plates = -1;
  }
  plates = plates + 1;

}

