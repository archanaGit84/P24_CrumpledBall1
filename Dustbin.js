class Dustbin{
    constructor(x,y){
        
        this.bottomWallWidth = 200;
        this.bottomWallHeight = 20;
        this.bottomWall = Bodies.rectangle(x,y,this.bottomWallWidth,this.bottomWallHeight, {isStatic:true})
       
        this.sideWallsWidth = 20;
        this.sideWallsHeight = 100;
        this.leftWall = Bodies.rectangle(x - this.bottomWallWidth/2, y + 10- this.sideWallsHeight/2,  
                        this.sideWallsWidth,this.sideWallsHeight, {isStatic:true});
        this.rightWall = Bodies.rectangle(x + this.bottomWallWidth/2, y +10 - this.sideWallsHeight/2,  
            this.sideWallsWidth,this.sideWallsHeight,{isStatic: true});

       World.add(world,this.bottomWall);  
       World.add(world,this.leftWall); 
       World.add(world,this.rightWall); 
    }

    display(){

        push();
        rectMode(CENTER);
        fill("green");
        rect(this.bottomWall.position.x, this.bottomWall.position.y,
            this.bottomWallWidth, this.bottomWallHeight);
        rect(this.leftWall.position.x, this.leftWall.position.y,
            this.sideWallsWidth, this.sideWallsHeight);
        rect(this.rightWall.position.x, this.rightWall.position.y,
            this.sideWallsWidth, this.sideWallsHeight);
        pop();
    }
}