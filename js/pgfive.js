var things = ["objects","activities","items","pieces","subjects","people","articles","novelties","things"];

var index = 0;

let backgroundImage;

function preload(){
  backgroundImage = loadImage('../hills.png');
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
  textSize(40); 
  text('these are a few of my favorite', 40, windowHeight/2);
  
  fill('#F29F3B');
  text(things[index], 620, windowHeight/2);
}

function mousePressed() {
  index = index + 1;

  if (index == things.length) {
    window.open('/pgsix.html', '_self');
  }
}