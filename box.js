class Box {
    constructor(x,y,w,h){
        var options = {
            restitution: 0.4,
            density: 0.1,
            friction:0.6
        }
        this.object = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.visibility = 255;
        World.add(world,this.object);
        this.image = loadImage("blue.png");
    }

    display(){
     //   console.log(this.object.speed )
      if (this.object.speed < 3.65){
        var pos = this.object.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.object.angle);
        imageMode(CENTER);   
        image(this.image,0,0,this.w,this.h);
        pop();
        }
        else {
            this.visibility -= 5;
            World.remove(world,this.object);
            push();
            tint(255, this.visibility);
            image(this.image, this.object.position.x, this.object.position.y,this.w,this.h);
            pop();
        }
    }
    score(){

        if( this.visibility <=0 &&  this.visibility > -100){

            score++;
        }
    }
}