function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
  let cor =  map (mouseX,0,400,0,255);
    background(cor);
    textSize(30);
  Text("Olá Mundo! 🌎", 100, 300);
  
  }