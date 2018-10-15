var x = [],
  y = [],
  insectNum = 20,
  insectBody = 20;

var LightBullOn;
var LightBullOff;
var LightSign;

var k = 0;

for (var i = 0; i < insectNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(20);
  stroke(0);
  textFont('Helvetica');
  frameRate(60);

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
    background('#044389');
    dragInsect(0, mouseX, mouseY);
    for (var i = 0; i < x.length - 1; i++) {
      dragInsect(i + 1, x[i], y[i]);
    LightBullOn = new  lightBull(mouseX, mouseY, 50, color(240, 195,15), color(242, 155, 18), color(229, 126, 34));
    LightSign = new  light(mouseX, mouseY, 7);
    }
  } else if (k == 1) {
    background('#29335C');
    randomInsect(0, random(), random());
    for (var i = 0; i < x.length - 1; i++) {
      randomInsect(i + 1, x[i], y[i]);
      LightBullOff = new  lightBull(mouseX, mouseY, 50, color(20, 206, 237), color(24, 170, 234), color(36, 139, 244));
    }
  }

    fill('white');
    noStroke();
    textSize(16);
    text('click to turn on and off the light',windowWidth-250, windowHeight-20);
}

function dragInsect(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * random(0,100);
  y[i] = yin - sin(angle) * random(0,100);
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
  push();
  translate(x - 30, y - 30);
  rotate(70);
  fill('#14ceff');
  ellipse(-2, 0, 17, 6);
  rotate(-70);
  ellipse(-2, 0, 17, 6);
  pop();

  angleMode(DEGREES);
  push();
  translate(x - 30, y - 30);
  noStroke();

  rotate(a);
  fill(0);
  ellipse(0, 0, 14, 10);

  fill('white');
  noStroke();
  ellipse(+5, -2, 2, 2);
  ellipse(+5, +2, 2, 2);

  stroke('yellow');
  strokeWeight(2);
  noFill();
  line(-1, 3.5, -1, -3.5)
  pop();



}

function lightBull(x, y, diameter, color1 , color2, color3) {
  angleMode(DEGREES);
  noStroke();
  fill(color2);
  arc(x, y, diameter, diameter, 90, 270, PIE);
  quad(x,y,x-25,y,x-13,y+30, x,y+30);

  fill(color1);
  arc(x, y, diameter, diameter, 270, 90, PIE);
  quad(x,y,x+25,y,x+13,y+30, x,y+30);

  noFill();
  strokeWeight(2);
  stroke(color3);
  line(x+4,y+30,x+14,y);
  line(x-4,y+30,x-14,y);
  line(x-14,y,x-6,y+6);
  line(x,y,x-6,y+6);
  line(x+14,y,x+6,y+6);
  line(x,y,x+6,y+6);

  noStroke();
  fill(127, 140, 141);
  arc(x,y+40,20,20,0,180,PIE);
  rect(x - 13, y + 30, 13, 3);
  rect(x - 13, y + 36, 13, 3);

  fill(149, 164, 165);
  rect(x - 13, y + 33, 13, 3);
  rect(x - 13, y + 39, 13, 3);
  rect(x, y + 30, 13, 3);
  rect(x, y + 36, 13, 3);

  fill(189, 194, 197);
  rect(x, y + 33, 13, 3);
  rect(x, y + 39, 13, 3);
}

function light(x, y){
  noFill();
  strokeWeight(4);
  stroke(240, 195,15, 90);
  arc(x, y, 80, 80, 130, 50);
  stroke(240, 195,15, 20);
  arc(x, y, 115, 115, 130, 50);
  stroke(240, 195,15, 10);
  arc(x, y, 150, 150, 130, 50);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
