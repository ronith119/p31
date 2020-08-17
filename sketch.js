function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles=[];
var plinko=[];
var divisions=[];
var divisionheigh=300;

function draw() {
  background(255,255,255);
  for(var i=0;i<=width;i=i+80) {
    divisions.push(new Division(i,height-divisionheigh/2,10,divisionheigh)
    
  } 
  for(var j=40;j<=width;j=j+50)
  {
    plinko.push(new Pinko(j,75));

  }
  for(var j = 15 ; j<=width-10;j=j+50){
    plinko.push(new Pinko(j,175));

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  drawSprites();
}