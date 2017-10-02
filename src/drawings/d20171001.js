import { colors } from '../utils/colors';

const d20171002 = function() {
  const canvas = document.querySelector('canvas');
  const cx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = `${colors.commodoreBg}`;

  // Add a new canvas!
  // const doppleganger = document.createElement("canvas");
  // document.querySelector(".drawing").append(doppleganger);

  let drawingOn = true;
  let lineOn = false;
  let mouseMoveOn = false;

  let [w, h, x, y] = [canvas.width, canvas.height, 0, 0];
  let [lastX, lastY] = [0, 1];
  let [_h, _h2, _s, _l] = [50, 350, 100, 50];

  let barColor = `hsl(${_h}, ${_s}%, ${_l}%)`;
  // let lineColor = `hsl(${_h2}, ${_s}%, ${_l}%)`
  let lineColor ='black';
  cx.fillStyle = barColor;
  // cx.fillRect(x, y, w, h);

  const repaint = (ms) => {
    if (drawingOn) requestAnimationFrame(repaint);

    if (!mouseMoveOn) {
      barColor = 'black';
      lineColor = `#${colors.commodoreText}`;

      if (y > canvas.height) {
        y = 150;
      }
      if (x > canvas.width) {
        x = 50;
      }
      cx.strokeStyle = lineColor;

      x += 10;
      y += 10;
      cx.moveTo(x, y);
      x += 5;
      y += 5;
      
    }
    cx.fillStyle = barColor;
    [w, h] = [10, x - canvas.height];
    cx.fillRect(x, y, w, h);
    cx.lineTo(x, y);
    cx.stroke();
  }
  repaint();

  const getNewCoords = (e) => {
    [lastX, lastY] = [x, y];
    [x, y] = [e.offsetX, e.offsetY];
  }
  // const changeLineColor = () => {
  //   if (_h2 > 360) _h2 = 1;
  //   else _h2 += 10;
  //   lineColor = `hsl(${_h2 + 1}, ${_s}%, ${_l}%)`;
  // }
  const changeBarColor = () => {
    if (_h > 360) _h = 1;
    else _h += 10;
    barColor = `hsl(${_h}, ${_s}%, ${_l}%)`;
  }

  const handleMouseMove = (e) => {
    getNewCoords(e);

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

      getNewCoords(e);
      
      cx.moveTo(x, y);
      cx.lineTo(lastX, lastY);
      cx.stroke();
    }
    changeBarColor();
    [lastX, lastY] = [x, y];

    mouseMoveOn = !mouseMoveOn;
    mouseMoveOn ? addMouseMoveHandler() : removeMouseMoveHandler();
  }
  canvas.addEventListener('click', handleClick);

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32) drawingOn = !drawingOn;
    if (drawingOn) repaint();
  });
}

export default d20171002;