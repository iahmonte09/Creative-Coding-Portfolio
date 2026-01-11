// Time Based Animation
// circle moves across screen and pulses in size

let x = 0;
let y = 200;
let direction = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // circle pulses in size using sine wave
  let circleSize = 50 + 20 * sin(frameCount * 0.1);

  // circle moves horizontally
  x += direction * 2;

  // bounce at edges
  if (x > width || x < 0) {
    direction *= -1;
  }

  fill(150, 100, 255);
  noStroke();
  circle(x, y, circleSize);
}
