class Paper{
    constructor(x,y,radius){

       var options={
            isStatic:false,
            restitution:0.4,
            friction:0.3,
            density:1.2
        }
        this.body=Matter.Bodies.circle(20,500,15,options);
        this.image=loadImage(" sprites/paper.png ")
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;

       // ellipseMode(CENTER);
        stroke(0);
        fill("white");
       // ellipse(pos.x,pos.y,20,20);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,35,35)
        
    }

}