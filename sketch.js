const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render= Matter.Render;

var engine, world;
var bkimg;
var bird, sling;
var ground1,ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var c1,c2,c3,c4,c5,c6;

function preload() {
    bkimg = loadImage("sprites/bg.png");
}

function setup() {
 var canvas = createCanvas(1300,700);
 engine = Engine.create();
 world = engine.world;

ground1 = new Ground(650,680,1300,20);

ground2 = new Ground(750,590,320,20);
ground3 = new Ground(1050,300,250,20);
platform = new Ground(150, 570, 300, 210);

b1 = new Box (653,555,60,70)
b2 = new Box (720,555,60,70)
b3 = new Box (785,555,60,70)
b4 = new Box (850,555,60,70)

b5 = new Box (683,485,60,70)
b6 = new Box (750,485,60,70)
b7 = new Box (815,485,60,70)

b8 = new Box (720,415,60,70)
b9 = new Box (785,415,60,70)

b10 = new Box (750,345,60,70)

c1 = new Box (983,290,60,70)
c2 = new Box (1050,290,60,70)
c3= new Box (1115,290,60,70)

c4 = new Box (1020,225,60,70)
c5 = new Box (1085,225,60,70)

c6 = new Box (1050,160,60,70)

bird = new Ball(200,100,50,50);

sling= new SlingShot(bird.body,{x:200,y:300})

//var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
//Render.run(render);
Engine.run(engine);

}

function draw() {
  background(bkimg);  
  Engine.update(engine);
  
  console.log(b10.body.speed)
  ground1.display();
  ground2.display();
  ground3.display();
  platform.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
 
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();

  b10.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  
  bird.display();

  sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode===32){
     sling.attach(bird.body);
  }
}