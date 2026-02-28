let x;
let y;

function setup() {
  createCanvas(600, 400);
  background(255);
  x = width / 2;
  y = height / 2;
}

function draw() {
  stroke(0);
  point(x, y);

  let step = floor(random(4));

  if (step === 0) {
    x += 5;
  } else if (step === 1) {
    x -= 5;
  } else if (step === 2) {
    y += 5;
  } else {
    y -= 5;
  }
}
