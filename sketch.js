const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
 world = engine.world;
ground1 = new Ground(600,580,1200,20);
box1 = new Block(900,100,100,100);
box2 = new Block(800,100,100,100);
box3 = new Block(700,100,100,100);
box4 = new Block(600,100,100,100);
box5 = new Block(900,100,100,100);
box6 = new Block(800,100,100,100);
box7 = new Block(700,100,100,100);
box8 = new Block(600,100,100,100);
box9 = new Block(900,100,100,100);
box10 = new Block(800,100,100,100);
box11 = new Block(700,100,100,100);
box12= new Block(600,100,100,100);
box13= new Block(900,100,100,100);
box14= new Block(800,100,100,100);
box15= new Block(700,100,100,100);
box16= new Block(600,100,100,100);

ball= new Ball(200,200,60,60);
rope= new SlingShot(ball.body,{x:200,y:50});
}

function draw() {
  background(0);
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ball.display();
rope.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}