class Bob{
   constructor(x,y,radius)
   {
      var options ={
         isStatic :false,
         restitution :1,
         friction :0,
         density :0.8
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
      World.add (world, this.body);
   }
   display(){
      var bobpos = this.body.position;
     // var angle=this.body.angle;
      push();
      translate(bobpos.x, bobpos.y);
      rectMode(CENTER)
     // rotate(angle);
     strokeWeight(2);
     stroke("black");
     fill("purple");
     ellipse(0,0,this.radius,this.radius)
     pop();
   }
}
