// Shapes with Variables
// Demonstrates how variables control size, position, and colour

let circleSize;
let rectWidth;
let rectHeight;

let circleX;
let circleY;

let circleColor;
let rectColor;

function setup() {
  createCanvas(400, 400);

  // Change values every time the sketch runs
  circleSize = random(40, 120);
  rectWidth = random(60, 140);
  rectHeight = random(40, 100);

  circleX = width / 2;
  circleY = height / 2;

  circleColor = color(random(255), random(255), random(255));
  rectColor = color(random(255), random(255), random(255));
}

function draw() {
  background(240);

  // Circle
  fill(circleColor);
  noStroke();
  circle(circleX, circleY, circleSize);

  // Rectangle
  fill(rectColor);
  rect(50, 300, rectWidth, rectHeight);

  // Line
  stroke(0);
  line(0, 0, width, height);
}
