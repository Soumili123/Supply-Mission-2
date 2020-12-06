var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, 681, width,10);
	groundSprite.shapeColor=color("white")

rect1=createSprite(width/2, 665.5, 200,20);
	rect1.shapeColor=color("red")

	rect2=createSprite(300, 625.5, 20,100);
	rect2.shapeColor=color("red")

	rect3=createSprite(500, 625.5, 20,100);
	rect3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 50 , 5 );
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
rect1 = new rect(500,100,100,20);



	 Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
 
  background(0);
  fill("red");
  
  if(keyDown="down"){
	
  keyPressed();
  }

 
    
  drawSprites();

  rect1.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Engine.update(engine);
	
	ellipseMode(RADIUS);
	ellipse(packageBody.position.x,packageBody.position.y,20,20)

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	//
	

  }
}



