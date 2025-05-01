let hills;

let message = 'MY FAVORITE THINGS';
let messageX;
const xSpeed = 1.5;
const ySpeed = 0.02;
const amplitude = 30;
const verticalLetterSpacing = 10;

function preload(){
  hills = loadImage('../img/hills.png');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(981, windowHeight);

  messageX = width;
}

function draw() {
  image(hills, 0,height/6.5,981,561);

  //textFont('filmotype-carmen');
  //textSize(60);
  //fill('#fdf5e2');
  //textAlign(CENTER, CENTER);
  //text('MY FAVORITE THINGS',981/2, windowHeight/2);

  textFont('scale-variable');
  textSize(20);
  fill('#fdf5e2');
  textAlign(NORMAL)
  text('the sound of music',120, 650);

  textFont('filmotype-carmen');
  textSize(90);
  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 2 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;

    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width + 50;
  }
}
