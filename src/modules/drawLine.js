const drawLine = (cx, coords, hue, brushSize, frameCount) => {
  cx.beginPath();
  cx.moveTo(coords.x, coords.y);
  cx.lineTo(coords.x + brushSize, coords.y + brushSize);
  cx.lineWidth = 3;
  cx.strokeStyle = `hsl(${hue}, 75%, 50%)`;
  cx.stroke();
}

export default drawLine;
