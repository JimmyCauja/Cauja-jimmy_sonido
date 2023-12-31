let noiseTime = 0;
let noiseTam = 100;

let osc, playing, freq, amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 35, 70);
  smooth(50);

  osc = new p5.Oscillator('triangle');
}

function draw() {

  let posX1 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTam), 0, 1, 0, windowHeight);
  let posX2 = map(noise(noiseTime + 0.1), 0, 1, 0, windowWidth);
  let posY2 = map(noise(noiseTam + 0.1), 0, 1, 0, windowHeight);

  let tam = map(noise(noiseTime), 0, 1, 50, 5);
  noiseTime += 0.004;
  noiseTam += 0.011;

  stroke(179, 70, 90, 60);
  strokeWeight(2);
  line(posX1, posY1, posX2, posY2);

  let reflY1 = windowHeight - posY1;
  let reflY2 = windowHeight - posY2;
  let tamrefl = tam;

  stroke(243, 159, 90, 30);
  strokeWeight(2);
  line(posX1, reflY1, posX2, reflY2, tamrefl);


  let posX3 = map(noise(noiseTime + 100), 0, 1, 0, windowWidth);
  let posY3 = map(noise(noiseTam + 50), 0, 1, 0, windowHeight);
  let tamcir = map(noise(noiseTam + 1), 0, 1, 0, 0,5);

  fill(0, 21, 36);
  stroke(200, 204, 10, 50);
  strokeWeight(3);
  circle(posX3, posY3, tamcir);


  ///// Sonido//////
  osc.start();
  freq = constrain(map(posX3 + 50), 0, 1, 0,);
  amp = 0, 5;

  osc.freq(freq, 0.1);
  osc.amp(amp, 1, posX3);
  
}