
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObj,groundObject	
var world;

function preload(){
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj = new Paper(200,100,20);

	
	


	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);
  
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,{x:140, y:-145})
	}
}

