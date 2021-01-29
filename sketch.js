const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

var engine,world;
var particle;
var line;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=200;

var count = 0;
var score = 0;
var turn = 0;

var gameState = "PLAY";

function setup() {
 var canvas= createCanvas(480,800);

 engine = Engine.create();
  world = engine.world;

  ground = new Ground (width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Division (k , height-divisionHeight/2,10,divisionHeight));
  }
    for (var j = 40;j <=width; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
};
function draw() {
background("black");
  textSize(20);
  //text("Score :"+score,20,30);

  Engine.update(engine);
  ground.display();

  if (frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
    score++;
  }
for (var j =0;j <particles.length; j++){
  particles[j].display();
}
for (var k =0;k <divisions.length; k++){
  divisions[k].display();
}
if (particle!=null){
  particle.display();

  if (particle.body.position.x <300){
    score=score+500;
    particle=null;
    if (count>= 5) gameState = "end";
  }
}

if (particle!=null){
  particle.display();

  if (particle.body.position.x >301 && particle.body.position.x <600){
    score=score+100;
    particle=null;
    if (count>=5)gameState = "end";
  }
}

if (particle!=null){
  particle.display();

  if (particle.body.position.x >601 && particle.body.position.x <800){
    score=score+200;
    particle=null;
    if (count>=5)gameState = "end";
  }
}

if (gameState=="end" && turn==5){
  text("GAME OVER ",100,50);
  textSize(20);
}

if (particle.body.position.y > 400){
  turn=turn+1;
}
}

function keyPresssed(){
  if (gameState!=="end"){

    count++;
    particle=new Particles(mouseX,10,10,10);
  }
}
