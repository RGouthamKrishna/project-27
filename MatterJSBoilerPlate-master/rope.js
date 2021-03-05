class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 10,
            length: 10
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}