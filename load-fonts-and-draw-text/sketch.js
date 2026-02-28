let myFont;

function preload() {
  myFont = loadFont('Jangkuy.otf');
}

function setup() {
  createCanvas(600, 400);
  background(220);
  textFont(myFont);
  textSize(48);
  fill(50, 100, 200);
  textAlign(CENTER, CENTER);
  text("Creative Coding!", width / 2, height / 2);
}
