var cloud,cloudImage; 
var cloud1,cloud1Image;
var coin,coinImage;
var coinGroup,cloudGroup;
var score = 0;
var gameover,gameoverImage;
var restart,restartImage;
var wood, woodImg,wood1;


function preload(){
cloudImage = loadImage("car2.png");
  cloud1Image = loadImage("cloud1.png");
  coinImage = loadImage("coin08.png");
  gameoverImage = loadImage("gameover.png");
  restartImage = loadImage("restart.png");
  woodImg = loadImage("wood.png");
}

function setup() {
  createCanvas(1280,500);
 
  cloud = createSprite(200,390);
  cloud.addImage(cloudImage);
  cloud.scale = 1;

 // wood = createSprite(200,390);
 // wood.addImage(woodImg);
 // wood.scale = 0.5;
  
  score = 0;
  coinGroup = new Group();
  woodGroup = new Group();
  wood1Group = new Group();
  
  gameover = createSprite(250,200,10,10);
  gameover.addImage(gameoverImage);
  gameover.scale = 0.4;
  gameover.visible = false;
  
  restart = createSprite(250,300,10,10);
 restart.addImage(restartImage);
  restart.scale = 0.8;
  restart.visible = false;
  
}

function draw() {
  background("lightblue")
  coin();
  wood();
  wood1();
  
  
  if (coinGroup.isTouching(cloud)) {
    coinGroup.destroyEach();
    score = score+2;
   
  }
  if(cloud.isTouching(woodGroup)) {
    woodGroup.destroyEach();
    wood1Group.destroyEach();
    coinGroup.destroyEach();
    gameover.visible = true;
    restart.visible = true;
    cloud.visible = false;
  }

  if(cloud.isTouching(wood1Group)) {
    woodGroup.destroyEach();
    wood1Group.destroyEach();
    coinGroup.destroyEach();
    gameover.visible = true;
    restart.visible = true;
    cloud.visible = false;
    
  }

  function coin() {
    if (frameCount % 60 === 0) {
   var coin = createSprite(100,200);
    coin.addImage(coinImage);
    coin.scale = 0.3; 
    coin.x = Math.round(random(1000,1500));
      coin.velocityX = -11;
      coinGroup.add(coin);
  }}
  
  function wood() {
    if (frameCount % 300 === 0) {
   var wood = createSprite(50,100);
    wood.addImage(woodImg);
    wood.scale = 0.4; 
    wood.x = Math.round(random(1000,1500));
      wood.velocityX = -11;
      woodGroup.add(wood);
  }}

  function wood1() {
    if (frameCount % 100 === 0) {
   var wood1 = createSprite(50,400);
    wood1.addImage(woodImg);
    wood1.scale = 0.4; 
    wood1.x = Math.round(random(1000,1500));
      wood1.velocityX = -11;
      wood1Group.add(wood1);
  }}
    
  
  if(keyDown("r")) {
    reset();
  }
  
  
  
  
  
  cloud.y=World.mouseY;
cloud.x=World.mouseX;
  
  cloud.y = World.mouseY;
   cloud.X = World.mouseX;
  
  
 drawSprites();
  textSize(20);
  fill("red");
  text("score:"+score,400,30);
}



function reset() {
  score = 0;
  gameover.visible = false;
  restart.visible = false;
  cloud.visible = true;
}

