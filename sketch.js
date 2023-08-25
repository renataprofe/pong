let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

velocidadeXBolinha = 6;
velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}