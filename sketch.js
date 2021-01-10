
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//ground = new Ground(width/2,);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  //ground.display();

  text(mouseX +","+mouseY,700,100);
  textSize(20);

  
  drawSprites();
 
}



