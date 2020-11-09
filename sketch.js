
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, bin, paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	bin = new Dustbin (720, 390, 100, 10)
	bin2 = new Dustbin(675,350,10,100);
	bin3 = new Dustbin(765,350,10,100)
	Ball = new Paper (100, 300, 10)
	ground = Bodies.rectangle(width/2 , 400, width, 10, {isStatic : true } );
	World.add(world, ground)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  bin.display();
  bin2.display();
  bin3.display()
  Ball.display();
  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x, ground.position.y, width, 10)
}
  
function keypressed(){
                                                                        
	if (keyCode === UP_ARROW){
	matter.body.applyForce(Ball.body, Ball.body.position,{
		x :12,
		y :-13                                        
	});
 }
}


                                   



