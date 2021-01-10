class Ground {
    constructor(x,y,w,h){
        var properties = {
            isStatic : true
        }
    
        this.ground = Matter.Bodies.rectangle(x,y,w,h,properties);
        console.log(this.ground)
        this.w = w;
        this.h = h;
        World.add(world,this.ground);
    }

    display(){
        rectMode(CENTER);
        fill("black")
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h)
    }
}
