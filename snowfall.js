flakes = [100];

function setup(){
  createCanvas(displayWidth, displayHeight)
  
  for(var i = 0; i < 1000; i++){
    flakes[i] = new Snowflake();
  }
}

function draw(){
  background(135,206,250);
  
  noStroke();
  fill(255);
  for(var i = 0; i < flakes.length; i++){
    ellipse(flakes[i].x, flakes[i].y, flakes[i].radius, flakes[i].radius);
    flakes[i].update();
  }
}

class Snowflake {
  constructor(){
    this.x = Math.floor(Math.random() * displayWidth);
    this.y = Math.floor(Math.random() * 1000) - 1000;
    this.radius = Math.floor(Math.random() * 10) + 3;
    this.yspeed = map(this.radius, 3, 12, 2.0, 1.5);
  }
  
  update(){
    this.y += this.yspeed;
    
    
    //x interaction
    if((this.x - mouseX >= 0 && this.x - mouseX <= 40) &&
    Math.abs(this.y - mouseY) <= 40){
      this.x += 40;
    } else if((this.x - mouseX <= 0 && this.x - mouseX >= -40) &&
    Math.abs(this.y - mouseY) <= 40){
      this.x -= 40;
    }
    
    
    //y interaction
    if((this.y - mouseY >= 0 && this.y - mouseY <= 40) &&
    Math.abs(this.x - mouseX) <= 50){
      this.y += 40;
    } else if((this.y - mouseY <= 0 && this.y - mouseY >= -40) &&
    Math.abs(this.x - mouseX) <= 50){
      this.y -= 40;
    }
    
    if(this.y > displayHeight + 50){
      this.y = Math.floor(Math.random() * 1000) - 1000;
    }
  }
}