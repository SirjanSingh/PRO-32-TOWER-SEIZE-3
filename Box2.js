class Box2 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255;
this.image=loadImage("sprites/enemy.png")
    }

    score(){
      if(this.visibility>0&&this.visibility<250){
score=score +2;
      }
    }
    display (){
      if (this.body.speed<1.94){
      super.display();
      } 
      else {
        World.remove(world,this.body);
       push();
       fill("white")
       this.visibility=this.visibility-10;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
      }
      }
    
  };