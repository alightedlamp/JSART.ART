const drawLine = (cx, coords, color, speed) => {
  cx.strokeStyle = color;
  cx.lineWidth = '5';
  cx.lineTo(coords.x, coords.y);
  cx.stroke();
}

export default drawLine;
