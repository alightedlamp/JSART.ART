const getNewCoords = (size, coords, directions, directionChoice) => {
  let x = coords.x;
  let y = coords.y;
  let dX = directions.directionX;
  let dY = directions.directionY;

  if (x == 0) dX = 'right';
  if (x > size.w) dX = 'left';
  if (dX == 'right') x++;
  else x--;

  if (y == 0) dY = 'down';
  if (y > size.h) dY = 'up';
  if (dY == 'up') y--;
  else y++;

  directions = { dX, dY };
  coords = { x, y };
  return [directions, coords];
}

export default getNewCoords;
