class rect { 
    constructor(x,y,width,height){
        var options={
            isStatic:1
        }

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=20;
        this.height=100;
        World.add(world,this.body);
    }

    display(){

        var pos= this.body.position;

          var angle = this.body.angle;

          this.body.shapeColor="red";

    }
}
