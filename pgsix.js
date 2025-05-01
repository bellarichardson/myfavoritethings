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
  backgroundImage = loadImage('../sansponystrudel.png');
  pony = loadImage('../pony.png');
  strudel = loadImage('../strudel.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight); //width:561
  
  frameRate(12);
}

function draw() {
  background('#21825C');
  image(backgroundImage,0,height/6.5,981,561);
  
  textFont('scale-variable');
  fill('#fdf5e2'); 
  textSize(40);
  //text('cream-colored ponies',25,45);
  
  //text('& crisp apple strudels',340,345);
  
  mouseDragged();
  
//PONY
  image(pony, ponyX, ponyY, 310.5, 391.5);
  
  if ((ponyX > 77) && (ponyX < 425)) {
    if ((ponyY > 200) && (ponyY < 615)) {
      fill(255);
      text("cream-colored ponies", 10,windowHeight/9);
      
    }
  }
//STRUDEL
  image(strudel, strudelX, strudelY, 349.5, 162);
  
  if ((strudelX > 500) && (strudelX < 865)) {
    if ((strudelY > 312) && (strudelY < 494)) {
      fill(255);
      text("& crisp apple strudels", 550,windowHeight/1.1);
      
    }
  }
  
  //MOUSE:
  //strokeWeight(0);
  //frameRate(12);
  //fill('#748a8a');
  //text("X: "+mouseX, 0, height/4);
  //text("Y: "+mouseY, 0, height/2); 

}

function mousePressed() { //ChatGPT helped with the code below
  // Check if mouse is inside pony image
  if (mouseX >= ponyX && mouseX <= ponyX + 310.5 &&
      mouseY >= ponyY && mouseY <= ponyY + 391.5) {
    draggingPony = true;
  }

  // Check if mouse is inside strudel image
  if (mouseX >= strudelX && mouseX <= strudelX + 349.5 &&
      mouseY >= strudelY && mouseY <= strudelY + 162) {
    draggingStrudel = true;
  }
}

function mouseDragged() {
  if (draggingPony) {
    ponyX = mouseX - 310.5 / 2;
    ponyY = mouseY - 391.5 / 2;
  }

  if (draggingStrudel) {
    strudelX = mouseX - 349.5 / 2;
    strudelY = mouseY - 162 / 2;
  }
}

function mouseReleased() {
  draggingPony = false;
  draggingStrudel = false;
}



