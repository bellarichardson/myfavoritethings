let hills;

function preload(){
  hills = loadImage('../hills.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);
}

function draw() {
  image(hills, 0,height/6.5,981,561);

  textFont('filmotype-carmen');
  textSize(60);
  fill('#fdf5e2');
  textAlign(CENTER, CENTER);
  text('MY FAVORITE THINGS',981/2, windowHeight/2);

  textFont('scale-variable');
  textSize(20);
  fill('#fdf5e2');
  textAlign(NORMAL)
  text('the sound of music',120, 650);
}
