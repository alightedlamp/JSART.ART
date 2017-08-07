const setNewOrigin = function(e, cx, x, y) {
    x = e.offsetX;
    y = e.offsetY;
    cx.moveTo(x, y);
}

export default setNewOrigin;
