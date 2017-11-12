// 20170722 -- PIXELISM
import { setupCanvas } from '../utils/helpers';

import getHeight from '../modules/getHeight';
import getWidth from '../modules/getWidth';
import draw from '../modules/draw';

const d20170722 = function() {
  const [canvas, cx] = setupCanvas();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hue = 0;
  let saturation = 50;
  let lightness = 50;

  let x = 0;
  let y = 0;
  let w = 20;
  let h = 20;

  let isDrawing = false;

  let line = {
    brushWidth: 20,
    currentColor: '',
    lastX: 0,
    lastY: 0
  };

  function setNewOrigin(e) {
    x = e.offsetX;
    y = e.offsetY;
    cx.moveTo(x, y);
  }

  setInterval(function() {
    if (hue > 360) hue = 0;
    hue++;
    line.currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    canvas.style.backgroundColor = line.currentColor;
  }, 100);

  setInterval(function() {
    if (x > getWidth()) x = 0;
    x++;

    if (y > getHeight()) y = 0;
    y++;

    cx.fillStyle = `hsl(${hue / 2}, ${saturation}%, ${lightness}%`;
    cx.fillRect(x, y, w, h);
  }, 1);

  canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    [line.lastX, line.lastY] = [e.offsetX, e.offsetY];
    setNewOrigin(e);
  });
  canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
      [line.lastX, line.lastY] = draw(e, cx, line);
    }
  });
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseout', () => (isDrawing = false));
};

export default d20170722;
