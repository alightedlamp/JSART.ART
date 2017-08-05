const drawLine = (cx, coords, spacer, hue, brushSize, frameCount) => {
  // this is just drawing lines repeatedly
  // fix so lines don't overlap
  cx.beginPath();
  cx.moveTo(coords.x, coords.y);
  cx.lineTo(coords.x + spacer, coords.y);
  cx.lineWidth = brushSize;
  if (frameCount % 2 == 0) {
    hue = Math.floor(Math.random() * 360);
  }
  cx.strokeStyle = `hsl(${hue}, 75%, 50%)`;
  cx.stroke();
}

export default drawLine;
