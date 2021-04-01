
class Box{
    constructor(x,y,width,height,fillColor){
        var options={
            restitution:1,
            friction:1,
            density:1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.color=fillColor;
    }
    display(){
        var pos = this.body.position;
        fill(this.color);
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}