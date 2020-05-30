// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var circle1;
var rectangle1,rectangle2,rectangle3;
var dustbin;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    circle1= new Ball(600,450,70);

    dustbin= new Dustbin(800,450,150,160);
    ground= new Ground(600,600,1600,20);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    circle1.display();
    dustbin.display();
    ground.display();
    keyPressed();
}
function keyPressed()
     { 
         if (keyCode === UP_ARROW) 
         { Matter.Body.applyForce(circle1Object.body,circle1Object.body.position,{x:130,y:-145});
     } 
        }