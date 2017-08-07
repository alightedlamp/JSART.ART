const draw = function(e, cx, canvas, isDrawing, brushWidth, currentColor, lastX, lastY) {
    cx.beginPath();
    cx.strokeStyle = currentColor;
    cx.lineWidth = brushWidth;
    cx.moveTo(lastX, lastY);
    cx.lineTo(e.offsetX, e.offsetY);
    cx.stroke();

    return [e.offsetX, e.offsetY];
}

export default draw;
