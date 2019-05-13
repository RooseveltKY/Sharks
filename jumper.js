function jumper() {
        this.x= 50;
        this.y= 0;
        this.gravity= 0.90; //The force of gravity
        this.lift= -20; //Opposing the force of gravity
        this.velocity= 0; //Velocity of player
        
        this.show= function() {
          image(fish, this.x, this.y, 150,62);
        }
        
        this.up= function() {
          this.velocity += this.lift; //Jumping function
        }
        
        this.right= function() {
          this.x+=10;
        }
        
        this.left= function() {
          this.x+=-10;
        }
        
        this.move= function() {
          if((keyIsDown(39)) && (jumper.x<w-150)) {
            jumper.right();
          }
          if((keyIsDown(37)) && (jumper.x>10)) {
            jumper.left();
          }
          
        }
        
        this.update= function() {
          
          this.velocity += this.gravity; //Gravity applied when not jumping
          this.y += this.velocity; //Changing the position on the y axis
          this.velocity *= 0.8; //Creating air resistance when the ball drops down
          
          if(this.y>h-62) { //Jumper hits the floor
            this.y= h-62;
            this.velocity= 0;
          }
          if(this.y<0) { //Jumper hits the top
            this.y= 0;
            this.velocity= 0;
          }
        }
  } //Object ends here
      
function keyPressed() {
    if (keyCode===32) {
      jumper.up();
    }
    if (keyCode===13) {
      location.reload();
      }
  }
