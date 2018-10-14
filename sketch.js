var x = [],
  y = [],
  insectNum = 20,
  insectBody = 20;

var theLightBull = {};

var k = 0;

for (var i = 0; i < insectNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(20);
  stroke(0);
  textFont('Helvetica')

}

function mouseClicked() {

  if(k==1){
    k=0;
  }else if(k==0){
    k=1;
  }
  console.log(k);
}

function draw() {

  if (k == 0) {
    background('blue');
    dragInsect(0, mouseX, mouseY);
    for (var i = 0; i < x.length - 1; i++) {
      dragInsect(i + 1, x[i], y[i]);
      lightBull(mouseX, mouseY, 50);
    }
  } else if (k == 1) {
    background('green');
    randomInsect(0, random(), random());
    for (var i = 0; i < x.length - 1; i++) {
      randomInsect(i + 1, x[i], y[i]);
      lightBullOff(mouseX, mouseY, 50);
    }
  }

    fill('white');
    noStroke();
    textSize(16);
    text('click to turn on and off the light',50, 50);
}

function dragInsect(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * insectBody * random(0, 5);
  y[i] = yin - sin(angle) * insectBody * random(0, 5);
  Insect(x[i], y[i], angle);
}

function randomInsect(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = random(0, width);
  y[i] = random(0, height);
  Insect(x[i], y[i], angle);
}


function Insect(x, y, a) {
  angleMode(DEGREES);
  push();
  translate(x - 30, y - 30);
  noStroke();

  rotate(70 * a);
  fill('lightblue');
  ellipse(-2, 0, 13, 5);
  rotate(-70 * a);
  ellipse(-2, 0, 13, 5);

  rotate(a);
  fill(0);
  ellipse(0, 0, 13, 6)
  pop();
}

function lightBull(x, y, diameter) {
  angleMode(DEGREES);
  this.color = 'orange';
  fill(this.color);
  noStroke();
  ellipse(x, y, diameter);
  rect(x - 13, y + 4, 26, 26, 6)

  fill(100);
  rect(x - 13, y + 33, 26, 7, 40)

  fill(110);
  rect(x - 9.5, y + 43, 19, 7, 40)

  noFill();
  stroke('white');
  strokeWeight(10);
  arc(x, y, 30, 30, 270, 0);
}

function lightBullOff(x, y, diameter, color) {
  angleMode(DEGREES);
  this.color = 'black';
  fill(this.color);
  noStroke();
  ellipse(x, y, diameter);
  rect(x - 13, y + 4, 26, 26, 6)

  fill(100);
  rect(x - 13, y + 33, 26, 7, 40)

  fill(110);
  rect(x - 9.5, y + 43, 19, 7, 40)

  noFill();
  stroke('white');
  strokeWeight(10);
  arc(x, y, 30, 30, 270, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
