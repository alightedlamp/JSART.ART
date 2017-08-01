// 20170722 -- PIXELISM
import getHeight from '../modules/getHeight';
import getWidth from '../modules/getWidth';

const d20170722 = function() {
    const canvas = document.querySelector("canvas");
    const cx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hue = 0;
    let saturation = 50;
    let lightness = 50;

    let x = 0;
    let y = 0;
    let w = 20;
    let h = 20;

    let isDrawing = false;
    let brushWidth = 20;
    let lastX = 0;
    let lastY = 0;

    let currentColor = '';
    let lineColor = '';

    function setNewOrigin(e) {
        x = e.offsetX;
        y = e.offsetY;
        cx.moveTo(x, y);
    }

    setInterval(function() {
        if (hue > 360) hue = 0;
        hue++;
        currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        canvas.style.backgroundColor = currentColor;
    }, 100);

    setInterval(function() {
        if (x > getWidth()) x = 0;
        x++;

        if (y > getHeight()) y = 0;
        y++;

        cx.fillStyle = `hsl(${hue/2}, ${saturation}%, ${lightness}%`;
        cx.fillRect(x, y, w, h);
    }, 1);

    function draw(e) {
        if (!isDrawing) return;

        cx.beginPath();
        cx.strokeStyle = lineColor;
        cx.lineWidth = brushWidth;;
        cx.moveTo(lastX, lastY);
        cx.lineTo(e.offsetX, e.offsetY);
        cx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    canvas.addEventListener('mousedown', function(e) {
        isDrawing = true;
        lineColor = currentColor;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        setNewOrigin(e);
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}

export default d20170722;
