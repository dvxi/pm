let templeRun;
let guy;

function preload(){
  templeRun = loadAnimation("/animations/Dead__000.png", "/animations/Dead__009.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  guy = createSprite(600, 800, 150, 150);
  guy.addAnimation("dead", templeRun);
}

function draw() {

  camera.position.x = guy.position.x;
  camera.position.y = guy.position.y;
  camera.zoom = .3;

  guy.velocity.x = (camera.mouseX - guy.position.x) * 0.1
  guy.velocity.y = (camera.mouseY - guy.position.y) * 0.1

  background(220);

  guy.animation.play();

  drawSprites();

}
