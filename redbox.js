class Redbox {
    constructor(x,y,width,height){
        var options = {
            restitution: 1.0,
            friction : 0.3,
            density: 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    }




}