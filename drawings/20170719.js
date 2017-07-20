const W = canvas.width;
const H = canvas.height;

canvas.style.backgroundColor =  '#012';

let x = 0;
let y = 0;

let hue = 300;

function drawLine(e) {
    console.log(e);
    cx.beginPath();
    cx.strokeStyle = `hsl(${hue}, 50%, 75%)`;
    cx.lineWidth = 2;
    cx.moveTo(x, y);
    cx.lineTo(window.innerWidth, y);
    cx.stroke();

    if (y == window.innerHeight) {
        y +- 20;
        x = y;
    }
    else {
        y += 20;
    }

    if (hue > 359) {
        hue = 0;
    }
    else {
        hue += 20;
    }
}

setInterval(function() {
    cx.beginPath();
    cx.strokeStyle = `hsl(${hue}, 50%, 75%)`;
    cx.lineWidth = 2;
    cx.moveTo(y, x);
    cx.lineTo(window.innerHeight, x);
    cx.stroke();
}, 1000)

canvas.addEventListener('mousemove', drawLine);