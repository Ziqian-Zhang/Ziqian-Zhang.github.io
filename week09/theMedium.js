

var col; //color
var freq = 0.000001; 
var r; //radius

function setup() {
  createCanvas(600, 600);	
}

function draw() 
{
    background(0);
    translate(300, 300);  
    rotate(millis()/2000);//rotate over time
    ellipseMode(RADIUS); //Draw circles in radius mode
    drawstar(millis()/30000);
}

function drawstar(rate)
{
    
  for (var i = 0; i < 200; i ++) {  // particle number
    cir = 300 + 175 * sin(millis() * freq * i);    // initial position of particles
    col = map(cir,25,375,175,0);  // color
    r = map(cir,25,375,5 * noise(i),15 * noise(i));  //radius
    //r=map(cir,25,375,2,10); 
    fill(col,col,200 * noise(millis()/2000)); // color
    noStroke();
    ellipse(cir * cos(i), cir * sin(rate * i),r,r);  //core period
          
 }	
}

