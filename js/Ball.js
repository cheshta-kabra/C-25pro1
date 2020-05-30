class Ball {
  constructor() {
    var options ={
        isStatic:true,
        restitution: 0.5
    }
    this.image=loadImage("assets/paper.png")
    this.body=Bodies.circle(190,550,70,options);
    this.radius=70;
    this.x=190;
    this.y=550;
    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position
        imageMode(CENTER);
        fill("grey");
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }

}
