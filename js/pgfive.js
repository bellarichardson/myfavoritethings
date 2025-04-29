var things = ["objects","activities","items","pieces","subjects","people","articles","novelties","things"];

var index = 0;

let backgroundImage;

function preload(){
  backgroundImage = loadImage('/img/combined/hills.png');
}

function setup() {
  createCanvas(654, 374);
}

function draw() {
  background(backgroundImage);
  
  fill(255); 
  textSize(30); 
  text('these are a few of my favorite', 25, 200);
  text(things[index], 430, 200);
}

function mousePressed() {
  index = index + 1;

  //if (index == things.length) {
    //window.open('next page');
  //}
}