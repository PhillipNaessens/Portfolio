var squareSize = 100;
var red1, green1, blue1;
var red2, green2, blue2;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();
  randomColors();
}

function draw() {
  background(red1, green2, blue2);

  for (var i = 0; i < windowWidth/100; i++) {
    for (var j = 0; j < windowHeight/100; j++) {



      var x = i*squareSize;
      var y = j*squareSize;

      if ((i+j) % 2 == 0) {
        fill(red1, green1, blue1);
      } else {
        fill(red2, green2, blue2);
      }



  var red3 = (red1+red2)/2;
  var green3 = (green1+green2)/2;
  var blue3 = (blue1+blue2)/2;

  var red4 = (red1+red3)/2;
  var green4 = (green1+green3)/2;
  var blue4 = (blue1+blue3)/2;

  var red5 = (red2+red3)/2;
  var green5 = (green2+green3)/2;
  var blue5 = (blue2+blue3)/2;



  if((i+j) % 3 == 2){
      fill(red3, green3, blue3);
      triangle(x, y, x+squareSize, y+squareSize, x, y+squareSize);
      fill(red4, green4, blue4);
      triangle(x+50, y+50, x, y+100, x+100, y+100);
        fill(red4, green4, blue4);
      triangle(x, y, x+50, y+50, x+100, y);
        }

  if((i+j) % 3 == 1){
      fill(red3, green3, blue3);
      triangle(x+squareSize, y, x+squareSize, y+squareSize, x, y+squareSize);
     fill(red5, green5, blue5);
     triangle(x+squareSize, y+squareSize, x+0.5*squareSize, y+0.5*squareSize, x, y+squareSize);
     fill(red5, green5, blue5);
     triangle(x, y, x+0.5*squareSize, y+0.5*squareSize, x+squareSize, y);
      }

  if((i+j)% 3 == 0){
      fill(red3, green3, blue3);
      triangle(x+squareSize, y, x+squareSize, y+squareSize, x, y+squareSize);
     fill(red5, green5, blue5);
     triangle(x+squareSize, y+squareSize, x+0.5*squareSize, y+0.5*squareSize, x, y+squareSize);
     fill(red5, green5, blue5);
     triangle(x, y, x+0.5*squareSize, y+0.5*squareSize, x+squareSize, y);
      }

           }

    }
}

  function mousePressed() {
  randomColors();
}


  function randomColors() {
  red1 = random(255);
  green1 = random(255);
  blue1 = random(255);
  red2 = random(255);
  green2 = random(255);
  blue2 = random(255);
}
