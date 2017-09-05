// 20170904


// green: h75-150
import getRandomColor from '../modules/getRandomColor';

const d20170904 = function() {
  const canvas = document.querySelector('canvas');
  const cx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = 'hsl(140, 50%, 75%)';

  let x, y = 0;
  let [h, s, l] = [75, 50, 75];
  let newGreen = 0;
  let lastGreen = 0;
  let newVal = 50;
  let lastVal = 50;

  const threshold = 10;

  cx.lineWidth = 5;

  const getANiceGreen = () => {
    lastGreen = newGreen;
    newGreen = 0;

    // Pick a new green within range that isn't the same as current green
    while ((newGreen < 75 || newGreen > 150) || newGreen === lastGreen) {
      newGreen = getSubtleNewValue(500, 10, 'h');
    }
    return newGreen;
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

  const randomInt = (base) => {
    return Math.floor(Math.random() * base);
  }

  const renderFrame = (ms) => {
    requestAnimationFrame(renderFrame);

    cx.strokeStyle = `hsl(${h}, ${s}%, ${l}%)`;
    cx.stroke();

    h = getANiceGreen();
    s = getSubtleNewValue(100, 's');
    l = getSubtleNewValue(100, 'l');
  }

  renderFrame(0);

  canvas.addEventListener('mousemove', function(e) {
    cx.moveTo(e.offsetX, e.offsetY);
    x = randomInt((canvas.width));
    y = randomInt((canvas.height));

    cx.lineTo(x, y);
  });
}

export default d20170904;