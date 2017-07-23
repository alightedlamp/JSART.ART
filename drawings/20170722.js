// 20170722 -- PIXELISM

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

let hue = 0;
let saturation = 50;
let lightness = 50;

let x = 0;
let y = 0;
let w = 20;
let h = 20;

let isDrawing = false;
let brushWidth = 20;
let lastX = 0;
let lastY = 0;

currentColor = '';

// why audio not playing
let audioLoop = new Audio('20170710_pawsweat.wav');
audioLoop.autoplay = true;
audioLoop.loop = true;

function setNewOrigin(e) {
    x = e.offsetX;
    y = e.offsetY;
    cx.moveTo(sx, sy);
}

setInterval(function() {
    if (hue > 360) hue = 0;
    hue++;
    currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    canvas.style.backgroundColor = currentColor;
}, 100);

setInterval(function() {
    if (x > getWidth()) x = 0;
    x++;

    if (y > getHeight()) y = 0;
    y++;

    cx.fillStyle = `hsl(${hue/2}, ${saturation}%, ${lightness}%`;
    cx.fillRect(x, y, w, h);
}, 1);

// edit so once click happens, color is set and doesn't change while drawing
function draw(e) {
    if (!isDrawing) return;

    cx.beginPath();
    cx.strokeStyle = currentColor;
    cx.lineWidth = brushWidth;;
    cx.moveTo(lastX, lastY);
    cx.lineTo(e.offsetX, e.offsetY);
    cx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    setNewOrigin(e);
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);