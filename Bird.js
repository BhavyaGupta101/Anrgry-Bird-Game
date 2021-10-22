class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  speed(){
    var birdangle = this.body.angle;
    console.log("birdsangle"+birdangle);
    birdangle = birdangle *(3.14/180);
    var velocity = p5.Vector.fromAngle(birdangle); 
    velocity.mult(10); 
    Matter.Body.setStatic(this.body, false); 
    Matter.Body.setVelocity(this.body, { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    console.log(this.body)

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
