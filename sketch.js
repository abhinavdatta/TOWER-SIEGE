const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, polygon_img, Polygon, stand, SlingShotObj;
function preload(){
  polygon_img=loadImage("polygon1.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1000,400);
 // createSprite(400, 200, 50, 50);

  ground=new Ground(width/2,390,width,20)
  

 

   pyramid1();
   pyramid2();
   function pyramid2(){
     stand1=new Ground(630,200,200,10);
     level5(560,125,"rgb(50,100,100)");
     level6(590,80,"rgb(0,155,200)");
     level7(620,35,"rgb(100,100,0)");
   }

     function pyramid1() {
       stand=new Ground(390,350,250,10);  
       level1(300,275,"lightblue");
       level2(330,235,"pink");
       level3(360,195,"rgb(0,250,200)");
       level4(390,155,"gray");
     }
     
     function level1(x,y,c){
    //LEVEL 1
     block1=new Box(x,y,30,40,c);
     block2=new Box(x+30,y,30,40,c);
     block3=new Box(x+60,y,30,40,c);
     block4=new Box(x+90,y,30,40,c);
     block5=new Box(x+120,y,30,40,c);
     block6=new Box(x+150,y,30,40,c);
     block7=new Box(x+180,y,30,40,c);
     }
     function level2(x,y,c){ 
     //LEVEL 2 
      block8=new Box(x,y,30,40,c);
      block9=new Box(x+30,y,30,40,c);
      block10=new Box(x+60,y,30,40,c);
      block11=new Box(x+90,y,30,40,c);
      block12=new Box(x+120,y,30,40,c);
     }
     function level3(x,y,c){
      //LEVEL 3
      block13=new Box(x,y,30,40,c);
      block14=new Box(x+30,y,30,40,c);
      block15=new Box(x+60,y,30,40,c);
     }
     function level4(x,y,c){ 
     //TOP
      block16=new Box(x,y,30,40,c);
     }
     function level5(x,y,c){ 
      //LEVEL 2 
       blockk8=new Box(x,y,30,40,c);
       blockk9=new Box(x+30,y,30,40,c);
       blockk10=new Box(x+60,y,30,40,c);
       blockk11=new Box(x+90,y,30,40,c);
       blockk12=new Box(x+120,y,30,40,c);
      }
      function level6(x,y,c){
       //LEVEL 3
       blockk13=new Box(x,y,30,40,c);
       blockk14=new Box(x+30,y,30,40,c);
       blockk15=new Box(x+60,y,30,40,c);
      }
      function level7(x,y,c){ 
      //TOP
       blockk16=new Box(x,y,30,40,c);
      }






     Polygon=Matter.Bodies.polygon(50, 300, 25, 20);
     World.add(world,Polygon);
     
     SlingShotObj=new SlingShot(this.Polygon,{x:100,y:300});
     Engine.run(engine);
   
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  
  ground.display();
  
     imageMode(CENTER);
     
     image(polygon_img,Polygon.position.x,Polygon.position.y,40,40); 

  //first pyramid
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //second pyramid
  stand1.display();
  blockk8.display();
  blockk9.display();
  blockk10.display();
  blockk11.display();
  blockk12.display();
  blockk13.display();
  blockk14.display();
  blockk15.display();
  blockk16.display();

  strokeWeight(4)
  fill ("WHITE");
  textSize(16);
  text("Drag and release to hit the boxes. Press SPACEBAR to have another try!!!",10,30);
  
 // polygon(Polygon.position.x,Polygon.position.y,6,20);
 SlingShotObj.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(this.Polygon, {x:100,y:300})
		SlingShotObj.attach(Polygon);
	}
}
function mouseDragged()
{
	Matter.Body.setPosition(this.Polygon, {x:mouseX, y:mouseY}) 
}


function mouseReleased()
{
	SlingShotObj.fly();
}