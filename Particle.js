class Particles {

    constructor(x,y,r){
        var options = {
            restitution:0.4,
            //'friction':1.0
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options);
        this.color=this.color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.anglel;

        push();
        translate (pos.x,pos.y);
        rotate (angle);
        //imageMode(CENTRE);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}