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
  hotel_image = loadImage('../assets/hotel.png')
  reception_bg = loadImage('../assets/reception_bg.jpg')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  boy = createSprite(50, 400, 30, 30)
  boy.addImage("standing", boyStanding)
  boy.addAnimation("walking", boyWalking)
  

  button = createButton('Rules');
  button.position(20, 20);
  button.mousePressed(changeBG);
  button.size(100, 50)

  paper = createSprite(width/2, height/2, 30, 30)
  paper.visible = false
  paper.addImage('rules', rules)

  hotel = createSprite(width -100, height/2, 50, 50)
  hotel.addImage("hotel", hotel_image)
  hotel.scale = 0.3

  reception = createSprite(width/2, height/2, 30, 30)
}

function draw() {
  background(bgImg);  
  if(keyDown('d')){
    boy.changeAnimation("walking",boyWalking)
    boy.x = boy.x + 7
  }
  if(keyDown('a')){
    boy.changeAnimation("walking",boyWalking)
    boy.x = boy.x - 7
  }
  if(boy.isTouching(hotel)){
    teleportToHotel()
  }
  drawSprites();
}

function changeBG() {
paper.visible = true
}

function teleportToHotel(){
  background(reception_bg);
  hotel.destroy()
}