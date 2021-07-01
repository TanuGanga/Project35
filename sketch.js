//Create variables here
var dog1,dog2,dog;
var database;
var foodStock,food
function preload()
{
	dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,50,50);
  dog.addImage(dog1);
  dog.scale=0.2;
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
background("lightblue");
if(keyDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dog2);
}
  drawSprites();
  textSize(15);
  text("Remaining Food"+food,170,200);
  text("NOTE:Press up arrow to feed the dog",130,10)
}
function readStock(data){
  food=data.val();

}
function writeStock(x){
  if(x<=0){x=0}
  else{x=x-1}
  database.ref("/").update({Food:x})
}

