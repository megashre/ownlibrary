var fixedRect, movingRect,car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(300, 200, 50, 80);
  car.shapeColor = "green";
  car.debug = true;

  wall = createSprite(500,200,10,200);
  wall.shapeColor = "green";
  wall.debug = true;
  car.velocityX=2;


  car1 = createSprite(300, 400, 50, 80);
  car1.shapeColor = "yellow";
  car1.debug = true;

  wall1 = createSprite(500,400,10,200);
  wall1.shapeColor = "yellow";
  wall1.debug = true;
  car.velocityX=2;
  car1.velocityX=1;
  wall1.velocityX=-1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  bounceOff(car,wall);
  bounce(car1,wall1)
  drawSprites();
}




