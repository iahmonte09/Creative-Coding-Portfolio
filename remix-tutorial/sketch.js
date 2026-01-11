// remix Tutorial: Bouncing Ball with interaction and color change

let x, y;
let dx, dy;
let ballColor;
let ballSize = 50;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  dx = 3;
  dy = 2;
  ballColor = color(random(255), random(255), random(255));
}

function draw() {
  background(240);

  // draw ball
  fill(ballColor);
  noStroke();
  circle(x, y, ballSize);

  // Mmove ball
  x += dx;
  y += dy;

  // bounce off edges
  if (x > width - ballSize/2 || x < ballSize/2) {
    dx *= -1;
    changeColor();
  }
  if (y > height - ballSize/2 || y < ballSize/2) {
    dy *= -1;
    changeColor();
  }
}

// function to change ball color
function changeColor() {
  ballColor = color(random(255), random(255), random(255));
}

// Mouse click increases speed
function mousePressed() {
  dx *= 1.5;
  dy *= 1.5;
}
