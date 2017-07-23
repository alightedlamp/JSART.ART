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

setInterval(function() {
    if (hue > 360) hue = 0;
    hue++;
    canvas.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}, 100);

setInterval(function() {
    if (x > getWidth()) x = 0;
    x++;

    if (y > getHeight()) y = 0;
    y++;

    cx.fillStyle = `hsl(${hue/2}, ${saturation}%, ${lightness}%`;
    cx.fillRect(x, y, w, h);
}, 1);

canvas.addEventListener('mousedown', function(e) {
    x = e.offsetX;
    y = e.offsetY;

    cx.beginPath();
    cx.moveTo(x, y);

    x++;
    y++;

    cx.lineTo(x, y);
    cx.stroke();
});