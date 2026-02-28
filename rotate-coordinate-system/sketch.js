function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  translate(width / 2, height / 2); // move origin to center
  rotate(frameCount * 0.05);       //rotate over time
  fill(100, 150, 200);
  rect(0, 0, 150, 50);
}
