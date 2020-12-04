var speed; 
var weight; 
var bullet;
var wall; 
var thickness;

function setup() { 
  createCanvas(1600,400);

    speed=random(200,400);
    
    weight=random(30,52); 
    
    bullet = createSprite(50, 200, 50, 10);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";

    wall = createSprite(1200, 200, thickness, height/2);
    
    thickness=random(22,83);
  
  }

function draw() {
  background(0,0,0);  

if(HasCollided(bullet,wall))
{

bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness *thickness *thickness)

if(damage > 10)
{
wall.shapeColor=color(255,0,0);
}

if(damage < 10)
{
  wall.shapeColor=color(0,255,0);
}

}
  drawSprites();
}


function HasCollided(Ibullet,Iwall){

bulletRightEdge = Ibullet.x + Ibullet.width;
wallLeftEdge=Iwall.x;


if(bulletRightEdge>=wallLeftEdge){

return true;

}

return false;

}