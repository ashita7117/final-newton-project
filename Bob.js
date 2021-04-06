class Box {
  constructor(x, y, radius) {
    var options = {
        'restitution':1,
        'friction':0,
        'density':0.8
    }
    this.body = Bodies.circle(x, y, (radius)/2, options);
    this.x = x;
    this.y = y;
    this.r = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("pink");
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
