const getNewCoords = (size, coords, speed, brushSize, direction) => {
  let x = coords.x;
  let y = coords.y;

  switch (direction) {
    case 'right':
      x += speed;
      break;
    case 'left':
      x -= speed;
      break;
    case 'down':
      y += speed;
      break;
    case 'up':
      y -= speed;
      break;
    default:
      x++;
      break;
  }

  // handle bounces
  if (x > size.w - brushSize) {
    direction = 'left';
    x -= speed;
  }
  if (x <= 0 - brushSize) {
    direction = 'right';
    x += speed;
  }
  if (y > size.h - brushSize) {
    direction = 'up';
    y -= speed;
  }
  if (y <= 0 - brushSize) {
    direction = 'down';
    y += speed;
  }

  coords = { x, y };
  return coords;
}

export default getNewCoords;
