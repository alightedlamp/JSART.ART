// 20170724 -- ERASER
import { setupCanvas } from '../utils/helpers';

import getHeight from '../modules/getHeight';
import getWidth from '../modules/getWidth';

const d20170724 = function() {
  const [canvas, cx] = setupCanvas();

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = 'blue';

  let [x, y] = [0, 0];
  let [xspeed, yspeed] = [1, 1];
  let [lastX, lastY] = [x, y];
  let [w, h] = [50, 50];
  let [hue, saturation, lightness] = ['', 75, 50];

  const audioLoop = new Audio('../audio/20170710_pawsweat.wav');
  audioLoop.crossOrigin = 'anonymous';
  audioLoop.autoplay = true;
  audioLoop.loop = true;

  const ac = new AudioContext();
  const source = ac.createMediaElementSource(audioLoop);
  source.connect(ac.destination);

  const analyser = ac.createAnalyser();
  analyser.fftSize = 256;
  source.connect(analyser);

  function rectangleBounce() {
    hue = ac.currentTime;

    x = x + xspeed;
    y = y + yspeed;

    if (x < 0 || x > canvas.width - h) {
      xspeed *= -1;
    }
    if (y < 0 || y > canvas.height - w) {
      yspeed *= -1;
    }

    cx.clearRect(lastX, lastY, w, h);
    cx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    cx.fillRect(x, y, w, h);
    [lastX, lastY] = [x, y];
  }

  function drawLines(e) {
    hue = e.offsetX < 360 ? e.offsetX : e.offsetY;

    const audioData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(audioData);

    cx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
    cx.beginPath();
    cx.moveTo(e.offsetX, e.offsetY);
    cx.lineWidth = '5';
    cx.lineTo(x, y);
    cx.stroke();
  }

  setInterval(rectangleBounce, 10);
  canvas.addEventListener('mousemove', drawLines);
};

export default d20170724;
