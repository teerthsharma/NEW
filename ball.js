class Ball{
    constructor(x, y, width, height,angle) {
        var options = {
          frictionAir:0.005,
         density:1.6,
         
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("white");
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width, this.height);
        pop();
      }
}