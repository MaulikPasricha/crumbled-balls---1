class Dustbin{
    constructor(x, y, width, height){
        var options ={
            isStatic : true
        }

        this.bodyb = Bodies.rectangle(x, y, width, height, options)
        World.add(world,this.bodyb);
     /*   this.bodyb2 = Bodies.rectangle((x-(width/2)), (y-(height*2)), width, height, options)
        World.add(world,this.bodyb2);
        this.bodyb3 = Bodies.rectangle((x+(width/2)), (y-(height*2)), width, height, options)
        World.add(world,this.bodyb3);*/

        this.height = height;
        this.width = width;
    }

display(){
    rectMode(CENTER)
    fill ("green")
    rect(this.bodyb.position.x, this.bodyb.position.y, this.width, this.height)
   /* rect(this.bodyb.position.x-(this.bodyb.width/2), this.bodyb.position.y-( this.bodyb.height*2),this.bodyb.width, this.bodyb.height, this.bodyb.options  )
    rect(this.bodyb.position.x+(this.bodyb.width/2), this.bodyb.position.y-( this.bodyb.height*2),this.bodyb.width, this.bodyb.height, this.bodyb.options  )

    */
}
}