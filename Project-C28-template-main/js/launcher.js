class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 20
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
        this.pointB = pointB;
    }

    fly() {
        this.launcher.bodyA = null;
    }

    display(){
        if(this.sling.bodyA) {
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}