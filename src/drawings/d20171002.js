// 20171002

import draw from '../modules/draw';

const d20171002 = function() {
  const canvas = document.querySelector('canvas');
  const cx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = 'white';
  
  const line = {
    brushWidth: 5,
    currentColor: '',
    lastX: 0,
    lastY: 0
  };
  cx.lineCap = 'round';
  
  let [x, y, W, H] = [50, 150, canvas.width / 2, canvas.height / 2];
  let isDrawing = false;
  let intervalLength = 30000;
  let themes = {
    redGreen: {
      color1: 'red',
      color2: 'lime'
    }
  };
  let currentTheme = themes.redGreen;

  const setStageA = () => {
    cx.fillStyle = currentTheme.color2;
    cx.strokeStyle = currentTheme.color1;
    cx.fillRect(x, y, W, H);
  }
  const setStageB = () => {
    cx.fillStyle = currentTheme.color1;
    cx.strokeStyle = currentTheme.color2;
    cx.fillRect(x, y, W, H);
  }

  const afterImage = () => {
    setStageB();
    setTimeout(() => setStageA(), intervalLength / 2);
  }

  const repeater = setInterval(afterImage, intervalLength);
  setStageA();
  

  const stopDrawing = () => {
    isDrawing = false;
  }
  canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
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
}

export default d20171002;