// 20170904
import { setupCanvas } from '../utils/helpers';
import draw from '../modules/draw';

const d20170904 = function() {
  const [canvas, cx] = setupCanvas();

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let x,
    y = 0;
  let [h, s, l] = [75, 20, 20];
  let newColor = 0;
  let lastColor = 0;
  let newVal = 50;
  let lastVal = 50;
  let direction = 'more';
  let isDrawing = false;

  const ranges = {
    red: [1, 20],
    green: [75, 150],
    blue: [208, 266],
    purple: [267, 328]
  };
  const line = {
    brushWidth: 12,
    currentColor: '',
    lastX: 0,
    lastY: 0
  };

  canvas.style.backgroundColor = 'hsl(140, 100%, 75%)';
  // Lets make the drawn lines look silly, why not
  cx.lineCap = 'round';

  const randomInt = base => Math.floor(Math.random() * base);
  const getRandomBrightColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 60%, 50%)`;
  // This and the next function could be combined, no?
  const getNewSubtlyDifferentColor = () => {
    let [low, high] = ranges.blue;
    lastColor = newColor;
    newColor = 0;

    // Pick a new color within range that isn't the same as current color
    while (newColor < low || newColor > high || newColor === lastColor) {
      newColor = getSubtleNewValue(500, 50, 'h');
    }
    return newColor;
  };

  // Returns new value within threshold for given value type
  const getSubtleNewValue = (base, threshold, type) => {
    if (type === 's' || type === 'l') {
      newVal = randomInt(base);
      while (newVal < lastVal - threshold || newVal > lastVal + threshold) {
        newVal = randomInt(base);
      }
      lastVal = newVal;
      return newVal;
    } else if (type === 'h') {
      return randomInt(base);
    }
  };

  // Main drawing function - generates random lines stretching from mouse position to outer edges of canvas
  const burst = e => {
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
    if (x % 4 === 0) {
      cx.strokeStyle = `hsl(${h}, ${s}%, ${l}%)`;
      cx.beginPath();
      cx.lineWidth = 12;
      cx.moveTo(x, y);

      x = randomInt(canvas.height);
      y = randomInt(canvas.width);

      cx.lineTo(x, y);
      cx.stroke();
      cx.closePath();
    }

    // Would like this to fill in shapes
    if (x % 20 === 0) {
      console.log('filling context');
      cx.fillStyle = getRandomBrightColor();
      cx.fill();
    }
  };

  // Lets us do some stuff when the drawing stops, like change the hue range or bg color
  const stopDrawing = () => {
    isDrawing = false;
  };

  canvas.addEventListener('mousemove', burst);
  canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    line.currentColor = getRandomBrightColor();
    [line.lastX, line.lastY] = [e.offsetX, e.offsetY];
    cx.moveTo(e.offsetX, e.offsetY);
  });
  canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
      [line.lastX, line.lastY] = draw(e, cx, line);
    }
  });
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
};

export default d20170904;
