class Ground {
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.object = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.object);
    }

    display(){
        var pos = this.object.position;
        fill("brown");
        rectMode(CENTER);   
        rect(pos.x,pos.y,this.w,this.h);
    }
}