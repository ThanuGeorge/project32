class Sling {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    attach(body){
        this.sling.bodyA = body;

    }
    detatch(){
        this.sling.bodyA = null;
    }
    display(){
        if (this.sling.bodyA){
        var pos = this.sling.bodyA.position;
        stroke("red");
        strokeWeight(7);
        line(pos.x,pos.y,this.pointB.x,this.pointB.y)  
        }
    }
    
}