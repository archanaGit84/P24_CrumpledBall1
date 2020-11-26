class Paper {
    constructor(x,y,radius){
        
        var options = {
            restitution:0.3,
            friction: 0.5,
            density:1.2

        }
        
        this.body = Bodies.circle(x,y,radius,options);
        console.log(this.body);
        World.add(world,this.body);

    }

    display(){
        ellipseMode(RADIUS);
        push();
        fill("yellow");
        circle(this.body.position.x, this.body.position.y, this.body.circleRadius);
        pop();
    }
}