class Dustbin {
    constructor() {
      var options ={
          isStatic:true
      }
      this.image=loadImage("assets/dustbingreen.png")
      this.body=Bodies.rectangle(800,490,150,160,options);
      this.height=160;
      this.width=150;
      this.x=800;
      this.y=490;
      World.add(world,this.body);
    }
  
    display() {
      var pos=this.body.position
          imageMode(CENTER);
          fill("grey");
          image(this.image,pos.x,pos.y,this.height,this.width);
      }
  
  }
  