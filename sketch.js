var tom, tom_Running, tom_Sitting, tom_Collided;
var jerry, jerry_Cheese, jerry_Collided, jerry_Teasing;
var bg, bgImage;

function preload() {
    tom_Sitting = loadAnimation("/images/tomOne.png");
    tom_Running =  loadAnimation("/images/tomTwo.png","/images/tomThree.png");
    tom_Collided = loadAnimation("images/tomFour.png");
    jerry_Cheese = loadAnimation("/images/jerryOne.png");
    jerry_Teasing = loadAnimation("/images/jerryTwo.png","/images/jerryThree.png");
    jerry_Collided = loadAnimation("/images/jerryFour.png");
    bgImage = loadImage("/images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(600,500,20,20);
    tom.addAnimation("ts",tom_Sitting);
    tom.addAnimation("tr",tom_Running);
    tom.addAnimation("tc",tom_Collided)
    tom.scale = 0.1;
    tom.debug  = true;
    tom.setCollider("circle", tom.x, tom.y, 1);
    jerry = createSprite(100,500,20,20);
    jerry.addAnimation("jc", jerry_Cheese);
    jerry.addAnimation("jco", jerry_Collided);
    jerry.addAnimation("jt",jerry_Teasing);
    jerry.scale = 0.1; 
    jerry.setCollider("circle", jerry.x, jerry.y, 10);
    console.log(tom.x);
    console.log(jerry.x);
}

function draw() {

    background(bgImage);
    if(jerry.x - tom.x < ((tom.width/2 + jerry.width/2)-90) && 
        tom.x - jerry.x < ((tom.width/2 + jerry.width/2))-90){
            tom.velocityX = 0;
            tom.changeAnimation("tc");
            console.log(tom.x);
            jerry.changeAnimation("jco");
      }
    
      
    drawSprites();
 
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.changeAnimation("tr");
        tom.scale = 0.1;
        
        jerry.changeAnimation("jt");
        jerry.scale = 0.1;
    }
}
