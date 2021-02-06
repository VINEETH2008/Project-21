var canvas;
var b1,b2,b3,b4;
var ball,edges
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
b1=createSprite(115,570,175,30);
b1.shapeColor=rgb(0,0,150);

b2=createSprite(305,570,175,30);
b2.shapeColor=rgb(255,69,0);

b3=createSprite(495,570,175,30);
b3.shapeColor=rgb(150,0,0);

b4=createSprite(685,570,175,30);
b4.shapeColor=rgb(0,150,0);

    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor=rgb(255,255,255);
    ball.setVelocity(4,9);
   //b1.y= World.mouseY
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    music.play();

    if (b1.isTouching(ball) && ball.bounceOff(b1)){
        ball.shapeColor=rgb(0,0,150);
            }

    if (b2.isTouching(ball) && ball.bounceOff(b2)){
        ball.shapeColor=rgb(255,69,0);
            }  

      if (b3.isTouching(ball) && ball.bounceOff(b3)){
        ball.shapeColor=rgb(150,0,0);
      }
    
      if (b4.isTouching(ball)){
        ball.shapeColor=rgb(0,150,0);
        ball.setVelocity(0,0);
        music.stop();
      }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
