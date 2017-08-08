const draw = function(e, cx, line) {
    cx.beginPath();
    cx.strokeStyle = line.currentColor;
    cx.lineWidth = line.brushWidth;
    cx.moveTo(line.lastX, line.lastY);
    cx.lineTo(e.offsetX, e.offsetY);
    cx.stroke();

    return [e.offsetX, e.offsetY];
}

export default draw;
