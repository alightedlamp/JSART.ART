// 20170724 -- SNAKE

canvas.style.backgroundColor = 'blue';

function getWidth() {
  if (self.innerWidth) return self.innerWidth;
  if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
  if (document.body) return document.body.clientWidth;
}

function getHeight() {
  if (self.innerHeight) return self.innerHeight;
  if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
  if (document.body) return document.body.clientHeight;
}

function clearCanvas() {
    cx.clearRect(0, 0, canvas.width, canvas.height);
}

let [x, y] = [getWidth(), getHeight()];
let [lastX, lastY] = [x, y];
let [w, h] = [50, 50];
let [directionX, directionY] = ['left', 'up'];
let [hue, saturation, lightness] = ['', 75, 50];

let fillColor = '';

let barFillHue = 25;
let [barX, barY, barW, barH] = [0, 0, 100, getHeight()];

const audioLoop = new Audio('../audio/20170710_pawsweat.wav');
audioLoop.crossOrigin = 'anonymous';
audioLoop.autoplay = true;
audioLoop.loop = true;

const ac = new AudioContext();
const source = ac.createMediaElementSource(audioLoop);
source.connect(ac.destination);

analyser = ac.createAnalyser();
analyser.fftSize = 256;
source.connect(analyser);

function rectangleBounce() {
  hue = ac.currentTime;

  if (x == 0) directionX = 'right';
  if (x > (canvas.width - h)) directionX = 'left';
  if (directionX == 'right') x++;
  else x--;

  if (y == 0) directionY = 'down';
  if (y > (canvas.height - w)) directionY = 'up';
  if (directionY == 'up') y--;
  else y++;

  cx.clearRect(lastX, lastY, w, h);
  cx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  cx.fillRect(x, y, w, h);
  [lastX, lastY] = [x, y];
}

function drawLines(e) {
  hue = e.offsetX < 360 ? e.offsetX : e.offsetY;

  const audioData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(audioData);
  let len = audioData.length;

  cx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
  cx.beginPath();
  cx.moveTo(e.offsetX, e.offsetY);
  cx.lineWidth = '5';
  cx.lineTo(x, y);
  cx.stroke();
}

setInterval(rectangleBounce, 10);
canvas.addEventListener('mousemove', drawLines)