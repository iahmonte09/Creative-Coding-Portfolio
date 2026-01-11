// Repetition with Loops
// Draws a grid of circles using a for loop

function setup() {
  createCanvas(400, 400);
  background(240);
  noStroke();

  let cols = 8; // number of columns
  let rows = 5; // number of rows
  let spacingX = width / (cols + 1);
  let spacingY = height / (rows + 1);
  let circleSize = 40;

  for (let i = 1; i <= cols; i++) {
    for (let j = 1; j <= rows; j++) {
      fill(random(255), random(255), random(255)); // random color for fun
      circle(i * spacingX, j * spacingY, circleSize);
    }
  }
}
