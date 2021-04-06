class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(2);

        var an1x=pointA.x;
        var an1y=pointA.y;
        
        var an2x=pointB.x+this.offsetX;
        var an2y=pointB.y+this.offsetY

        line(an1x,an1y,an2x,an2y)
        }
}