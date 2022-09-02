var sprite

function setup() {
  createCanvas(500,500);
  sprite=createSprite(250,250,50,50);

}
function draw() 
{
  background(255);
  if(keyIsDown(UP_ARROW)){
    sprite.y-=2;
  }
  if(keyIsDown(DOWN_ARROW)){
    sprite.y+=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    sprite.x-=2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    sprite.x+=2;
  }
  drawSprites();

}




