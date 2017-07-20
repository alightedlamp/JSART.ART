let hue = 215;
let fillColor, bgColor = `hsl(${hue}, 100%, 65%)`;

canvas.style.backgroundColor = bgColor;

function clearCanvas() {
    cx.clearRect(0, 0, canvas.width, canvas.height);
}
function getRandomCoord() {
    return Math.floor(Math.random() * 200);
}
function getRandomHue() {
    return Math.floor(Math.random() * 360);
}

function adjustColorByCoords(hue, x, y) {
    return `hsl(${hue}, ${x}%, ${y}%)`;
}

function drawPolygon(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    cx.beginPath();
    cx.moveTo(x, y);

    x+= getRandomCoord();
    y+= getRandomCoord();
    cx.lineTo(x, y);

    x-= getRandomCoord();
    y-= getRandomCoord();
    cx.lineTo(x, y);

    x+= getRandomCoord();
    y+= getRandomCoord();
    cx.lineTo(x, y);
    clearCanvas();

    fillColor = adjustColorByCoords(getRandomCoord(), 100, 50);
    cx.fillStyle = fillColor;
    cx.fill();
}

canvas.addEventListener('mousemove', drawPolygon);
//canvas.addEventListener('click', setInterval(drawPolygon, 100));