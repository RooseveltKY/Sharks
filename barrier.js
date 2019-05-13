function barrier() {
        this.x= w;
        this.y= Math.floor(Math.random()*h-50);
        this.gravity= -1; //The force of gravity
        this.lift= -10; //Opposing the force of gravity
        this.velocity= 0; //Velocity of player
        
        this.show= function() {
          image(shark, this.x, this.y, 350,150);
        }
        
        /*this.up= function() {
          this.velocity += this.lift; //Jumping function
        }*/
        
        this.update= function() {
          this.velocity += this.gravity; //Gravity applied when not jumping
          this.x += this.velocity; //Changing the position on the y axis
          this.velocity *= 0.8; //Creating air resistance when the ball drops down
          if(this.x<-350) {
            this.y = Math.floor(Math.random()*h-50);
            this.velocity = 0;
            this.x = w;
            this.gravity--;
              if(this.gravity<-3){
                this.gravity=-3;
              }
            score++;
              /*if((score>5)&&(score<10)){
                level++;
              }
              if((score>10)&&(score<20)){
                level++;
              }*/
          }
        }
}

function barrier2() {
        this.x= w;
        this.y= Math.floor(Math.random()*h-50);
        this.gravity= -1; //The force of gravity
        this.lift= -10; //Opposing the force of gravity
        this.velocity= 0; //Velocity of player
        
        this.show= function() {
          image(shark2, this.x, this.y, 250,107);
        }
        
        /*this.up= function() {
          this.velocity += this.lift; //Jumping function
        }*/
        
        this.update= function() {
          this.velocity += this.gravity; //Gravity applied when not jumping
          this.x += this.velocity; //Changing the position on the y axis
          this.velocity *= 0.8; //Creating air resistance when the ball drops down
          if(this.x<-350) {
            this.y = Math.floor(Math.random()*h-50);
            this.velocity = 0;
            this.x = w;
            score++;
            /*if((score>5)&&(score<10)){
              level++;
            }
            if((score>10)&&(score<20)){
              level++;
            }*/
          }
        }
}

function barrier3() {
  this.x= w;
  this.y= Math.floor(Math.random()*h-50);
  this.gravity= -0.5; //The force of gravity
  this.lift= -10; //Opposing the force of gravity
  this.velocity= 0; //Velocity of player
  
  this.show= function() {
    image(shark3, this.x, this.y, 600,257);
  }
  
  /*this.up= function() {
    this.velocity += this.lift; //Jumping function
  }*/
  
  this.update= function() {
    this.velocity += this.gravity; //Gravity applied when not jumping
    this.x += this.velocity; //Changing the position on the y axis
    this.velocity *= 0.8; //Creating air resistance when the ball drops down
    if(this.x<-350) {
      this.y = Math.floor(Math.random()*h-50);
      this.velocity = 0;
      this.x = w;
      score++;
      /*if((score>5)&&(score<10)){
        level++;
      }
      if((score>10)&&(score<20)){
        level++;
      }*/
    }
  }
}
