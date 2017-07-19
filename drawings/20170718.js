/*
    To-do:
    - fix mouse move event
    - make colors change and size based on some other variable
*/

cx.beginPath();

canvas.style.backgroundColor = 'red';

let fillColor = 'hsl(25, 75%, 43%)';

function drawPolygon(cx, event) {
    var x = event.clientX;
    var y = event.clientY;

    cx.moveTo(x, y);
    cx.lineTo(10, 70);
    cx.lineTo(100, 70);
    cx.lineTo(150, 10);
}

function fillShape(cx) {
    cx.fillStyle = fillColor;
    cx.fill();
}

canvas.addEventListener('onmousemove', drawPolygon(cx, event));