let x, y;
let vx, vy;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  vx = random(-5, 5);
  vy = random(-5, 5);
}

function draw() {
  background(220);
  
  // bounce
  if (x < 0 || x > width) vx *= -1;
  if (y < 0 || y > height) vy *= -1;
  
  // shake
  let shakeX = random(-2, 2);
  let shakeY = random(-2, 2);
  
  x += vx + shakeX;
  y += vy + shakeY;
  
  fill(200, 100, 150);
  ellipse(x, y, 50);
}
