// 20170803
import drawLine from '../modules/drawLine';
import getNewCoords from '../modules/getNewCoords';

const d20170803 = () => {
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = 'red';

    const size = { w: window.innerWidth, h: window.innerHeight };
    let coords = { x: size.w / 2, y: size.h / 2 };
    let directionChoice = '';
    let directions = { dX: 'right', dY: ''};

    let speed = 30;
    let hue = 240;
    let color = `hsl(${hue}, 50%, 75%)`;
    let isDrawing = false;

    const keys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }

    cx.beginPath();
    cx.moveTo(coords.x, coords.y);

    const renderFrame = (ms) => {
      requestAnimationFrame(renderFrame);
      // [directions, coords] = getNewCoords(size, coords, directions, directionChoice);
      drawLine(cx, coords, color, speed);
    }

    function handler(e) {
        if (keys[e.keyCode] === 'up') directionChoice = 'up';
        if (keys[e.keyCode] === 'down') directionChoice = 'down';
        if (keys[e.keyCode] === 'right') directionChoice = 'right';
        if (keys[e.keyCode] === 'left') directionChoice = 'left';

        if (!isDrawing && directionChoice) {
          isDrawing = true;
          renderFrame(0);
        }
    }

    window.addEventListener('keydown', handler, true);
}

export default d20170803;
