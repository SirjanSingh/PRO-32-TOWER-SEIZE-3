/*class Ball  {
 
    constructor(x, y, width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/pentagon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        strokeWeight(4);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
    image (this.image,this.body.position.x,this.body.position.y,this.width, this.height);
    
     pop();
      }
}*/
/*
class Ball extends BaseClass {

  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("sprites/pentagon.png");


  }

}*/

class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/pentagon2.jpg");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
