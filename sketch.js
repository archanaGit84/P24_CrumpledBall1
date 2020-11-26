
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var engine,world;
var paper, ground, dustbin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,500,20);
	ground = new Ground(400,650,800,20);
	dustbin = new Dustbin(600,630);

	//Create the Bodies Here.
/*	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:800,
			height: 700,
			wireframes: false
		}
	})

	Render.run(render);*/

	Engine.run(engine);
	
  
}


function draw() {

 // rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x:65, y: -55});
	}
}



