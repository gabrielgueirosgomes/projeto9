var bola

function setup() {
  createCanvas(1200,400);
bola=createSprite(600,200,30,30)
 
}

function draw() 
{
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    bola.position.x = bola.position.x +5;

    background("red")

  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow")

    bola.position.x = bola.position.x -5;
  }
  
  
  if (keyIsDown(UP_ARROW)) 
  {
    background("green")
    bola.position.y = bola.position.y -5;
  }
  if (keyIsDown(DOWN_ARROW)) 
  {
    bola.position.y = bola.position.y +5;
    background("white")

  }

drawSprites()
}




