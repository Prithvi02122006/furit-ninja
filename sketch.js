var sword,swordImage;
var PLAY=1;
var END=0;
GameState=1;
var score;

var bgI;


function setup()
{
createCanvas(600,600);
  score = 0;
  
 
}
function preload()
{
swordImage=loadImage("sword.png");
bgI=loadImage("Kashish Gavali/images_(3)[2].jpeg") ;
fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
score=0;
fruitsGroup = new Group();
enemyGroup = new Group();
}
function setup()
{
sword=createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale=0.7; 

  
}

function draw()
{
background(bgI);
sword.y=World.mouseY;
sword.x=World.mouseX;
  text("Score : "+ score, 50,50);
  
  if(sword.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach();
    score = score+10;
    textSize(30);
    fill("red");
  }
   
  
fruits();
  
drawSprites();
}

function fruits()
{
if(World.frameCount%80===0)
  {
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r==1)
    {
      fruit.addImage(fruit1);
    }
    
else if(r==2)
    {
      fruit.addImage(fruit2);
    }
    
else if(r==3)
    {
      fruit.addImage(fruit3);
    }
     if(r==4)
    {
      fruit.addImage(fruit4);
    }
     fruit.y=Math.round(random(50,340))

    fruit.velocityX=-7;
fruit.setLifetime=100;
fruitsGroup.add(fruit);
  }
 
  
  
  
  
  
  
  
}