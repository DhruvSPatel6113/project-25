const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

	paper = new Paper(20,500,15);
	ground = new Ground(400,594,800,10);
	bin1 = new bin(600,579,100,20);
	bin2 = new bin(555,539,10,110);
	bin3 = new bin(645,539,10,110);
	bin1.image=loadImage(" sprites/dustbingreen.png ");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
 Engine.update(engine);

  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  paper.display();
  image(bin1.image,600,530,120,120);
   
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{ x:35,y:-35});

	}
}

