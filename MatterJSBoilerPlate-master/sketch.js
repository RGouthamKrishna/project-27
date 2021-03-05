
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var platform;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


    platform = new Roof(400,200,300,70);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
  platform.display();
 
}



