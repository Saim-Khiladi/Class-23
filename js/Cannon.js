class Cannon{
constructor(x,y,width,height,angle){

this.x=x;
this.y=y;
 this.width=width;
 this.angle=angle;
 this.height=height;

}
display(){
fill("#676e6a");
push();
translate(this.x,this.y);
rotate(this.angle);
rect(-10,-20,this.width,this.height);
pop();

arc(this.x-10,this.y+10,140,200,PI,TWO_PI);

}


}