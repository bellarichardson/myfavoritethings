let backgroundImage;

var ponyX = 500;
var ponyY = 0;
var strudelX = -100;
var strudelY = 260;

var X;
var Y;

let draggingPony = false;
let draggingStrudel = false;

function preload(){
  backgroundImage = loadImage('/img/combined/sansponystrudel.png');
  pony = loadImage('/img/pony.png');
  strudel = loadImage('/img/strudel.png');
}

function setup() {
  createCanvas(654, 374);
  background('#68DDC4');
  frameRate(12);
}

function draw() {
  background(backgroundImage);
  
  fill(255); 
  textSize(30);
  text('cream-colored ponies',25,45);
  
  text('& crisp apple strudels',340,345);
  
  mouseDragged();
  
//PONY
  image(pony, ponyX, ponyY, 207, 261);
  
  if ((ponyX > 77) && (ponyX < 270)) {
    if ((ponyY > 68) && (ponyY < 308)) {
      fill(0);
      text("Congrats", 100, 100);
      
    }
  }
//STRUDEL
  image(strudel, strudelX, strudelY, 233, 108);
  
  if ((strudelX > 343) && (strudelX < 563)) {
    if ((strudelY > 138) && (strudelY < 230)) {
      fill(0);
      text("Congrats", 100, 100);
      
    }
  }
  
}

function mousePressed() { //ChatGPT helped with the code below
  // Check if mouse is inside pony image
  if (mouseX >= ponyX && mouseX <= ponyX + 207 &&
      mouseY >= ponyY && mouseY <= ponyY + 261) {
    draggingPony = true;
  }

  // Check if mouse is inside strudel image
  if (mouseX >= strudelX && mouseX <= strudelX + 233 &&
      mouseY >= strudelY && mouseY <= strudelY + 108) {
    draggingStrudel = true;
  }
}

function mouseDragged() {
  if (draggingPony) {
    ponyX = mouseX - 207 / 2;
    ponyY = mouseY - 261 / 2;
  }

  if (draggingStrudel) {
    strudelX = mouseX - 233 / 2;
    strudelY = mouseY - 108 / 2;
  }
}

function mouseReleased() {
  draggingPony = false;
  draggingStrudel = false;
}
