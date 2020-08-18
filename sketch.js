const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//This creates all the variables
var ground, tree, tree_img;
var boy, boy_img;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;

function preload(){

	//This loads both of the images
	tree_img=loadImage("tree.png");

	boy_img=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	//This creates all the new sprites
	ground=new Ground();
	stones=new Stone(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	attach = new Throw(stones.body,{x:100,y:465});

	//The tree and the boy dont follow Matter.js so I can create them as sprites
	
	tree = createSprite(775,360);
	tree.addImage(tree_img);

	tree.scale=0.40;

	boy=createSprite(160,550);
	boy.addImage(boy_img);
	boy.scale=0.125;

	Engine.run(engine);
  
}

function draw() {

	//This makes the rectMode center and makes the spacebar

  	rectMode(CENTER);
  	background("grey");

  	fill("black");
  	textSize(18);
  	text("Press spacebar for more stones!",100,100);

	//This detects the collision
  	detectCollision(stones,mango1);
  	detectCollision(stones,mango2);
  	detectCollision(stones,mango3);
	detectCollision(stones,mango4);
	detectCollision(stones,mango5);
	detectCollision(stones,mango6);
	detectCollision(stones,mango7);
	detectCollision(stones,mango8);
	detectCollision(stones,mango9);
	detectCollision(stones,mango10);

	drawSprites();

	stones.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

}

//These are all the functions mouse Dragged and mouse Released
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

//This is the function detectCollision
function detectCollision(lstones,lmango){

	if
	
	(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
//This is the function keyPressed
function keyPressed(){
	if(keyCode === 32){

		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}