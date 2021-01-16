class Rope {
    constructor(body1,body2,offsetX,offsetY){
       this.offsetX=offsetX;
       this.offsetY=offsetY;
       var options={
            body1: body1,
            body2: body2,
            point2:{x:this.offsetX, y:this.offsetY}
        }
        
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}