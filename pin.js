class Pinko{
    consructor(x,y,r){
        var options{
            restitution:0.5,

        }
        this.body=Bodies.circle(x,y,this,options);
        this.color=color(random(0,255),random(0,225),random(0,225));
        World.add(world,this.body);
    }
}