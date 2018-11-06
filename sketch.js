var mic;

function preload(){
  // put preload code here
}

var yoff = 0;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  mic= new p5.AudioIn();
  mic.start();

}

var r=100 ;
function draw() {
  angleMode(DEGREES);
  // put drawing code here
  background(0);

  var volume= mic.getLevel();

  text(volume,30,30);
  var mappedVolume = map(volume, 0, 0.3, 1,20);
  console.log(mappedVolume);
  push();
  translate(width/2, height/2);
  //fill(255);
  noStroke();

  beginShape();
  var xoff= 0 ;
  var voiceColor;
  var pink = color('blue');
  var blue = color('white');


  for(var a=0; a<360; a += 6){

  var volumeColor = map(mappedVolume, 1, 15, 0,1);

  voiceColor = lerpColor(blue ,pink, volumeColor);
  fill(voiceColor);


    var offsetHight = map(noise(xoff, yoff),0,1, -5, 5 );
    var offsetLow = map(noise(xoff, yoff),0,1, -3, 3 );



      if( mappedVolume > 10 ){
        var crazyr = r + offsetHight * mappedVolume;
        var x = crazyr * cos(a);
        var y = crazyr* sin(a);
        push();
        // fill('pink')
        ellipse(x,y,4);
        pop();
      } else {
        var crazyr = r + offsetLow * mappedVolume;
        var x = crazyr * cos(a);
        var y = crazyr* sin(a);
        ellipse(x,y,4);
      }

    xoff += 0.1;

  }


  endShape();
  pop();

  yoff += 0.05;
}
