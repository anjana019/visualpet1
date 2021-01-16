//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
 
 dogImg = loadImage("images/dogImg.png");
 happyDogImg= loadImage("images/dogImg1.png");
}

function setup() {
	  createCanvas(500, 500);
    database=firebase.database();
    foodStock= database.ref('food');
    foodStock.on("value",readStock);
    dog=createSprite(250,250,15,15);
    dog.addImage(dogImg);
    dog.scale=0.5;
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+ foodS, 170,200);
  textSize(13);
  text("Note: Press up arrow key to feed the dog!",130,10,300,20);

  //add styles here
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  } else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

