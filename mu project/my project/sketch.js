
var bg,bg2;
var squiraal1, squiraal2;;
var squiraal;
var squirralGroup;
var snakeGroup;
var hammerImg;
var playSound;
var snakeImg, snakeImg2;
var score=0;
var playSound2;


function preload(){
bg=loadImage("bg.png")
bg2=loadImage("bg2.jpg")
squiraal1=loadImage("squirral.png")
squiraal2=loadImage("squirral 2.png")
hammerImg=loadImage("hammer.png")
playSound=loadSound("sound.wav");
playSound2=loadSound("sound 2.wav");
snakeImg=loadImage("snake.png");
snakeImg2=loadImage("snake2.png");
}


function setup (){
    createCanvas(displayWidth,displayHeight);
    hammer=createSprite(200,200,10,10)
    hammer.addImage(hammerImg);
    hammer.scale=0.5;

    squirralGroup=new Group ();
    snakeGroup=new Group ();

}

function draw(){
     background(bg);

     hammer.y=World.mouseY;
    hammer.x=World.mouseX;
    textSize(20);
    fill("pink")
    stroke ("red")
    text("hint:if you will touch squirral you will gain 1 point on touching snake marks will be deducted....,gaine 10 points to win",200,80)

    textSize(40);
    fill("cyan");
    text("Score: " + score, 450, 50);

    if(squirralGroup.isTouching(hammer)){
      squirralGroup.destroyEach();
      playSound.play();
      score++;
      playSound.play();
    }


    if(snakeGroup.isTouching(hammer)){
      snakeGroup.destroyEach();
      playSound2.play();
      score--;
      
      
     
    }
   

     spawnSnake();
    spawnSquirral();
    if(score === 10) {
      clear()
     background(bg2)
     
      spawnSquirral.destroyEach()
      spawnSnake.destroyEach()
    }
    

    drawSprites();
}

  function spawnSquirral(){
  
    if(frameCount%50===0){
    squiraal=createSprite(180,800)
        var i=Math.round(random(1,2))
        if(i===1){
          squiraal.addImage(squiraal1)
          squiraal.scale=0.3;
          
        }
        else{
          squiraal.addImage(squiraal2)
          squiraal.scale=0.3
          
        }

        squiraal.velocityY=-12;
        squiraal.x=Math.round(random(180,displayWidth-100))
        squiraal.lifetime=displayHeight/12;
        squirralGroup.add(squiraal);



    }
}

function spawnSnake(){
  
  if(frameCount%80===0){
  snake=createSprite(170,800)
      var i=Math.round(random(1,3))
      if(i===1){
        snake.addImage(snakeImg)
        snake.scale=0.4;
        
      }
      else{
        snake.addImage(snakeImg2)
        snake.scale=0.4
        
      }

      snake.velocityY=-12;
      snake.x=Math.round(random(170,displayWidth-100))
      snake.lifetime=displayHeight/12;
      snakeGroup.add(snake);



  }
}

  
