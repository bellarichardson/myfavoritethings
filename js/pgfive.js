var things = ["objects","activities","items","pieces","subjects","people","articles","novelties","things"];

var index = 0;

let backgroundImage;

function preload(){
  backgroundImage = loadImage('../img/combined/hills.png');
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
    createCanvas(981, windowHeight);
  }

function draw() {
  image(backgroundImage,0,height/6.5,981,561);
  
  textFont('scale-variable');
  fill(255); 
  textSize(40); 
  text('these are a few of my favorite', 25, 200);
  text(things[index], 560, 200);
}

function mousePressed() {
  index = index + 1;

  if (index == things.length) {
    window.open('/pgsix.html', '_self');
  }
}