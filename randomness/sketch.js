// Randomness Experiment
// each run produces different positions,colors and sizes

function setup() {
  createCanvas(400, 400);
  background(240);

  let numShapes = 20;

  for (let i = 0; i < numShapes; i++) {
    // random size
    let size = random(20, 80);

    // random position
    let x = random(width);
    let y = random(height);

    // random color
    fill(random(255), random(255), random(255), 200);
    noStroke();

    // draw ellipse
    ellipse(x, y, size, size);
  }
}
