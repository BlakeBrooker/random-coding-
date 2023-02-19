function setup() {
  createCanvas(500, 500);
  background(240);
  noStroke();
}

function draw() {
  let size = random(20, 100);
  let x = random(width);
  let y = random(height);
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b, 150);
  triangle(x, y, x + size, y + size, x + size, y);
  triangle(x, y, x + size, y + size, x, y + size);
  ellipse(x + size / 2, y + size / 2, size * 0.8, size * 0.8);
}
