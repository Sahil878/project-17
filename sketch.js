
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, ground
var score, survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600)
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(monkey.x);
  
  survivalTime = 0;  
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  
  background("white")

  stroke("white");
  textSize(20);
  fill("white")
  text("Score: "+ score, 500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(keyDown("space")&&monkey.y>=314){
     monkey.velocityY=-17.5  
    
     }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(ground.x>0){
     ground.x = ground.width/2;
     }
   
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY=0;  
    ground.velocityX=0;
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    text("Game Over", 200, 200);
    textSize(50);
     } 
  
  food();
  spawnObstacle();
  
  drawSprites();
}                               

function food(){
  if(World.frameCount%80===0){
  banana=createSprite(570,Math.round(random(120,200)),20,20);
  banana.addImage(bananaImage)
  banana.velocityX = -3 
  banana.lifetime=200
  banana.scale=0.09;
    
  FoodGroup.add(banana);
     }
}

function spawnObstacle(){
  if (World.frameCount%300===0){
    obstacle=createSprite(316,340,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-4;
    obstacle.lifetime=150;
    obstacle.scale=0.09;
    
    obstacleGroup.add(obstacle);
  }
}






