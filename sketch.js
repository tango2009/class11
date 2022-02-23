
var trex ,trex_running;
var ground 
function preload(){
 trex_running=loadAnimation( "trex1.png","trex3.png","trex4.png")
 ground=loadAnimation("ground1.png")
};

function setup(){
  createCanvas(600,200)
   ground = createSprite (300,180,600,20);
   ground.addAnimation("ground1.png")
   trex = createSprite (50 ,150,20,50);
   trex.addAnimation ("running",trex_running);trex.scale=0.5
 }

function draw(){
  background("white");
  drawSprites();
if (keyDown("space")){ 
  trex.velocityY=-12
}
trex.velocityY=trex.velocityY+0.8
trex.collide(ground)
}
