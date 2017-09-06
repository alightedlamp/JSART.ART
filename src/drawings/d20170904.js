// 20170904

import draw from '../modules/draw';

const d20170904 = function() {
  const canvas = document.querySelector('canvas');
  const cx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = 'hsl(210, 80%, 5%)';

  let x, y = 0;
  let [h, s, l] = [75, 20, 20];
  let newColor = 0;
  let lastColor = 0;
  let newVal = 50;
  let lastVal = 50;
  let direction = 'more';
  let isDrawing = false;

  cx.lineWidth = 2;
  // Lets make the drawn lines look silly, why not
  cx.lineCap = 'round';

  function setNewOrigin(e) {
    x = e.offsetX;
    y = e.offsetY;
    cx.moveTo(x, y);
  }

  const getRandomBrightColor = () => {
    let hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 60%, 50%)`
  }

  let line = {
    brushWidth: 10,
    currentColor: '',
    lastX: 0,
    lastY: 0
  }

  const getNewSubtlyDifferentColor = (colorRangeLow, colorRangeHigh) => {
    lastColor = newColor;
    newColor = 0;

    // Pick a new color within range that isn't the same as current color
    // 1 - 20ish = red
    // 75 - 150 = greens
    // 208 - 266 = blues
    while ((newColor < 208 || newColor > 266) || newColor === lastColor) {
      newColor = getSubtleNewValue(500, 50, 'h');
    }
    return newColor;
  }

  // Returns new value within threshold for given value type
  const getSubtleNewValue = (base, threshold, type) => {
    if (type === 's' || type === 'l') {
      newVal = randomInt(base);
      while (newVal < lastVal - threshold || newVal > lastVal + threshold) {
        newVal = randomInt(base);
      }
      lastVal = newVal;
      return newVal;
    }
    else if (type === 'h') {
      return randomInt(base)
    }
  }

  const randomInt = (base) => Math.floor(Math.random() * base);

  const burst = (e) => {
    h = getNewSubtlyDifferentColor();

    // Pulsate lightness and saturation within in a good middle range
    if (s === 80) direction = 'less';
    if (s === 20) direction = 'more';
    if (direction === 'less') {
      s--;
      l--;
    }
    if (direction === 'more') {
      s++;
      l++;
    }

    x = e.offsetX;
    y = e.offsetY;

    // Make the lines not seem SO hectic
    if (x % 2 === 0) {
      cx.strokeStyle = `hsl(${h}, ${s}%, ${l}%)`;
      cx.beginPath();
      cx.lineWidth = 2;
      cx.moveTo(x, y);

      x = randomInt(canvas.height);
      y = randomInt(canvas.width);

      cx.lineTo(x, y);
      cx.stroke();

      cx.closePath();
    }
  }

  const stopDrawing = () => {
    isDrawing = false;
    // Change line color on drawing stop
    line.currentColor = getRandomBrightColor();
  }

  canvas.addEventListener('mousemove', burst);
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
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
}

export default d20170904;