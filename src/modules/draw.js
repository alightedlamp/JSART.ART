const draw = function(e, brushWidth) {
    if (!isDrawing) return;

    cx.beginPath();
    cx.strokeStyle = currentColor;
    cx.lineWidth = brushWidth;;
    cx.moveTo(lastX, lastY);
    cx.lineTo(e.offsetX, e.offsetY);
    cx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

module.exports = draw;