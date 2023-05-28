var forest, bgImg
var boy, boyWalking, boyStanding
var button
var rules, paper
var hotel, hotel_image

function preload() {
  bgImg = loadImage('../assets/forestBg.jpeg')
  boyWalking = loadAnimation(
  '../assets/boy_walking_1.png', 
  '../assets/boy_walking_2.png', 
  '../assets/boy_walking_3.png', 
  '../assets/boy_walking_4.png', 
  '../assets/boy_walking_5.png', 
  '../assets/boy_walking_6.png')
  boyStanding = loadImage('../assets/boy_walking_5.png')
  rules = loadImage('../assets/paper_bg.png')
  hotel_image = loadImage('../assets.hotel.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  boy = createSprite(50, 400, 30, 30)
  boy.addImage("standing", boyStanding)
  boy.addAnimation("walking", boyWalking)
  hotel.addImage("hotel", hotel_image)

  button = createButton('Rules');
  button.position(20, 20);
  button.mousePressed(changeBG);
  button.size(100, 50)

  paper = createSprite(width/2, height/2, 30, 30)
  paper.visible = false

  hotel = createSprite(width -100, height/2, 500, 500)
}

function draw() {
  background(bgImg);  
  drawSprites();
}

function changeBG() {
paper.visible = true
}

function teleport(){

}