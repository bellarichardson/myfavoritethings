let backgroundImage;

function preload(){
  backgroundImage = loadImage('kettlesnmittens.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
}

function draw() {
  background('#C7F6F2');
  image(backgroundImage,0,height/6.5,981,561);
  
  textFont('scale-variable'); 
  textSize(40);
  text('bright copper kettles',10,windowHeight/9);
  
  text('& warm woolen mittens',500,windowHeight/1.1);
  
  if(mouseX > 600){
    fill ('#CC5500');
  } else if (mouseX>550){
    fill('#EC5800');
  } else if (mouseX>500){
    fill('#FF7518');
  } else if (mouseX>450){
    fill('#FB7C19');
  } else if (mouseX >400){
    fill ('#FC8E39');
  } else if (mouseX > 350){
    fill('#FC9749');
  } else if (mouseX > 300){
    fill ('#FC9C51');
  } else if (mouseX > 250){
    fill ('#FDB37A');
  } else if (mouseX > 200){
    fill ('#fdc192');
  } else if(mouseX>150){
    fill('#FEE1CA');
  } else if (mouseX>100){
    fill('#FEEEE2');
  } else if(mouseX>50){
    fill('#FEF3EA');
  } else {
    fill('white');
  }
}