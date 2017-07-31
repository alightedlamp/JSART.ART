function bounce(shape, hue, coords, currentDirection, dimensions) {
  let coords = [...coords];

  if (x == 0) directionX = 'right';
  if (x > (canvas.width - h)) directionX = 'left';
  if (directionX == 'right') x++;
  else x--;

  if (y == 0) directionY = 'down';
  if (y > (canvas.height - w)) directionY = 'up';
  if (directionY == 'up') y--;
  else y++;

  cx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  if (shape === 'rectangle') {
    cx.clearRect(lastX, lastY, w, h);
    cx.fillRect(x, y, w, h);
  }

  if (shape === 'circle') {
    cx.beginPath();
    cx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    cx.fill();
  }

  [lastX, lastY] = [x, y];
}

export default bounce;