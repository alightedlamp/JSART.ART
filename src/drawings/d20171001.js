import { colors } from '../utils/colors';

const d20171002 = function() {
  const canvas = document.querySelector('canvas');
  const cx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // canvas.style.backgroundColor = `${colors.commodoreBg}`;
  canvas.style.backgroundColor = 'red';

  // Add a new canvas!
  // const doppleganger = document.createElement("canvas");
  // document.querySelector(".drawing").append(doppleganger);

  let drawingOn = true;
  let lineOn = false;
  let mouseMoveOn = false;

  let [w, h, x, y] = [canvas.width, canvas.height, 0, 0];
  let [lastX, lastY] = [0, 1];
  let [_h, _h2, _s, _l] = [50, 350, 100, 50];

  const getNewLineColor = () => {
    _h2 = _h2 > 360 ? _h2 = 1 : _h2 += 10;
    return `hsl(${_h2 + 1}, ${_s}%, ${_l}%)`;
  }
  const getNewBarColor = () => {
    _h = _h > 360 ? _h = 1 :_h += 10;
    return `hsl(${_h}, ${_s}%, ${_l}%)`;
  }
  let barColor = getNewBarColor();
  // let lineColor = getNewLineColor();
  let lineColor ='black';
  cx.fillStyle = barColor;
  // cx.fillRect(x, y, w, h);

  const getNewX = (start, incrementor) => x > canvas.width ? start : x + incrementor;
  const getNewY = (start, incrementor) => y > canvas.height ? start : y + incrementor;
  
  const repaint = (ms) => {
    if (drawingOn) requestAnimationFrame(repaint);
    
    if (!mouseMoveOn) {
      barColor = 'black';
      lineColor = `#${colors.commodoreText}`;
      
      [x, y] = [getNewX(0, 10), getNewY(0, 10)];
      cx.strokeStyle = lineColor;
      cx.moveTo(x, y);
      [x, y] = [getNewX(0, 5), getNewY(0, 5)];
    }
    cx.fillStyle = barColor;
    [w, h] = [10, x - canvas.height];
    cx.fillRect(x, y, w, h);
    cx.lineTo(x, y);
    cx.stroke();
  }
  repaint(0);
  
  const getNewMouseCoords = (e) => {
    [lastX, lastY] = [x, y];
    [x, y] = [e.offsetX, e.offsetY];
  }
  const handleMouseMove = (e) => {
    getNewMouseCoords(e);

    if (!drawingOn) cx.lineTo(x, y);
    if (lineOn) {
      cx.moveTo(lastX, lastY);
      cx.lineTo(x, y);
      cx.stroke();
    }
    lineColor = 'black';
  }
  const addMouseMoveHandler = () => canvas.addEventListener('mousemove', handleMouseMove);
  const removeMouseMoveHandler = () => canvas.removeEventListener('mousemove', handleMouseMove);

  // On click, if the automatic drawing is on, go into 'line mode'
  const handleClick = (e) => {
    if (!drawingOn) {
      // Default is `false`
      lineOn = !lineOn;

      getNewMouseCoords(e);
      
      cx.moveTo(x, y);
      cx.lineTo(lastX, lastY);
      cx.stroke();
    }
    barColor = getNewBarColor();
    [lastX, lastY] = [x, y];

    mouseMoveOn = !mouseMoveOn;
    mouseMoveOn ? addMouseMoveHandler() : removeMouseMoveHandler();
  }
  canvas.addEventListener('click', handleClick);
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32) drawingOn = !drawingOn;
    if (drawingOn) repaint(0, 'black');
  });
}

export default d20171002;