const getNewCoords = (size, coords, speed, directions, directionChoice) => {
  let x = coords.x;
  let y = coords.y;
  let dX = directions.dX;
  let dY = directions.dY;

  // handle direction change
  switch (directionChoice) {
    case 'right':
      x += speed;
      dX = 'right';
      break;
    case 'left':
      x -= speed;
      dX = 'left';
      break;
    case 'down':
      y += speed;
      dY = 'down';
      break;
    case 'up':
      y -= speed;
      dY = 'up';
      break;
  }

  // handle bounces
  // if (x == 0) dX = 'right';
  // if (x > size.w) dX = 'left';
  // if (dX == 'right') x++;
  // else x--;
  //
  // if (y == 0) dY = 'down';
  // if (y > size.h) dY = 'up';
  // if (dY == 'up') y--;
  // else y++;

  directions = { dX, dY };
  coords = { x, y };
  return [directions, coords];
}

export default getNewCoords;
