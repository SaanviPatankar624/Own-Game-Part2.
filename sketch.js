
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var asteroids, asteroids_img1, asteroids_img2;
var back_img, spacecraft_img, spacecraft;
var asteroidsGroup;

function preload(){
	 
	asteroids_img1 = loadImage("asteroids-2.jpg");
	asteroids_img2 = loadImage("asteroids-3.jpg");
	back_img = loadImage("background-2.jpg");
	spacecraft_img = loadImage("jet.jpg");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.

	backgroundImg = createSprite(500, 500, 1300, 700);
	backgroundImg.addImage("moving", back_img);
	backgroundImg.velocityX = -6;
	backgroundImg.scale = 1;
	backgroundImg.x = backgroundImg.width/2;
	backgroundImg.visible = true;
	console.log(backgroundImg.x);

	spacecraft = createSprite(100, 300, 200);
	spacecraft.addImage(spacecraft_img);
	spacecraft.scale = 0.5;

	asteroidsGroup = new Group();
}


function draw() {
  rectMode(CENTER);
  background(back_img);

  Engine.update(engine);

  if (backgroundImg.x < 0){
	backgroundImg.x=backgroundImg.width/2;
	backgroundImg.velocityX = -4;
}

  spacecraft.x = World.mouseX;
  spacecraft.y = World.mouseY;

  backgroundImg.display();

  spawnAsteroids();

  spacecraft.display();

  drawSprites();
}

function spawnAsteroids() {

	if(frameCount%100 === 0){
        var asteroids = createSprite(1000,120,70);
		//asteroids.debug = true;
	    asteroids.velocityX = -6;

        var rand = Math.round(random(1,2));
        switch(rand){
        case 1:  asteroids.addImage(asteroids_img1);
        break;
         
        case 2:  asteroids.addImage(asteroids_img2);
        break;

        default: break;
     }

		asteroids.scale = 0.20;
		asteroids.lifetime = 200;

		asteroidsGroup.add(asteroids);
		
	}

}



