const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,playerImg;
var alien,alien2,alien3,alienImg,alien2Img,alien3Img;
var astroid,astroidImg; 
var aGroup, astroidGroup;
var ground;
var Score;
function preload()
{
	playerImg=loadImage("ben-10-four-arms.png");
alienImg=loadImage("images.png");
alien2Img=loadImage("gratis-png-extraterrestre.png");
alien3Img=loadImage("favpng_cartoon-extraterrestrial-intelligence-unidentified-flying-object.png");	
astroidImg=loadImage("download.png");
}

function setup() {
	createCanvas(windowWidth, 700);
player=createSprite(100,350,20,10)
player.addImage("player",playerImg);
player.scale=0.4;
ground=createSprite(400,410,900,10)
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
aGroup=new Group();
astroidGroup= new Group();
Score=0

}


function draw() {
  rectMode(CENTER);
  background("white");
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(keyDown("space")) {
      player.velocityY = -10;
    }
      
    player.velocityY = player.velocityY + 0.8
      
       player.collide(ground);
      if (aGroup.isTouching(player)){
        Score=Score+2;
      aGroup.destroyEach();
    }
    if(astroidGroup.isTouching(player)){
      aGroup.destroyEach();
          ground.velocityX = 0;
    player.velocityY = 0;
    astroidGroup.setVelocityXEach(0);
    aGroup.setVelocityXEach(0);
    astroidGroup.setLifetimeEach(-1);
    aGroup.setLifetimeEach(-1);
	}
	spawnAstroids();
  spawnAlien();
  spawnAlien2();
  spawnAlien3();
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ Score,500,50);
     
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

}
function spawnAstroids() {
	if(frameCount % 300 === 0) {
	  astroid = createSprite(800,370,10,30);
	  astroid.velocityX = -6;
	  
	  astroid.addImage(astroidImg);
	  astroid.scale=0.4;
		  
	  astroid.lifetime = 300;
	 astroidGroup.add(astroid);
	}
  }
  function spawnAlien() {
	if (frameCount % 150 === 0) {
	  alien = createSprite(600,250,40,10);
	  alien.y = random(155,320);    
	  alien.velocityX = -5;
  
	  alien.lifetime = 300;
	  alien.depth = alien.depth + 1;
  
	   alien.addImage(alienImg);
	  alien.scale=0.4;
  
	  aGroup.add(alien);
	}
  }
  function spawnAlien2(){
    if (frameCount % 200 === 0) {
      alien2 = createSprite(600,250,40,10);
      alien2.y = random(155,320);    
      alien2.velocityX = -5;
    
      alien2.lifetime = 300;
      alien2.depth = alien2.depth + 1;
    
       alien2.addImage(alien2Img);
      alien2.scale=0.05;
    
      aGroup.add(alien2);
    }
  }
  function spawnAlien3(){
    if (frameCount % 100 === 0) {
      alien3 = createSprite(600,250,40,10);
      alien3.y = random(155,320);    
      alien3.velocityX = -5;
    
      alien3.lifetime = 300;
      alien3.depth = alien3.depth + 1;
    
       alien3.addImage(alien3Img);
      alien3.scale=0.05;
    
      aGroup.add(alien3);
    }
  }



