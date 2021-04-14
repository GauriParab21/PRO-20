var bg,bgImg;
var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2;

function preload() {
    //load the images here
bgImg = loadImage("images/garden.png");

cat1 = loadAnimation("images/tomOne.png");
cat2 = loadAnimation("images/tomThree.png","images/tomTwo.png");
cat3 = loadImage("images/tomFour.png");

mouse1 = loadAnimation("images/jerryOne.png");
mouse2 = loadAnimation("images/jerryThree.png");
mouse3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
   cat = createSprite(700,500);
   cat.addAnimation("catSleeping",cat1);
   cat.scale = 0.2;

   mouse = createSprite(100, 500);
   mouse.addAnimation("mouseStanding", mouse1);
   mouse.scale = 0.2;

}

function draw() {
background(bgImg);
text(mouseX + ',' + mouseY,10,45);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage",cat3); 
        cat.x = 300;
        cat.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage", mouse3);
        mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
}

//For moving and changing animation write code here
function keyPressed(){
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing", mouse2);
     mouse.changeAnimation("mouseTeasing");
 }
}

