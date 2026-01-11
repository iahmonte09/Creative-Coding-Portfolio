// Interaction with Mouse or Keyboard
// circle follows mouse,key changes background

let bgColor;

function setup() {
  createCanvas(400, 400);
  bgColor = 220; 
}

function draw() {
  background(bgColor);

  // circle follows mouse
  fill(100, 150, 255);
  noStroke();
  circle(mouseX, mouseY, 50);
}


function keyPressed() {
  bgColor = color(random(255), random(255), random(255));
}
