// 20170718 -- ORAGAMI BIRDS
import clearCanvas from '../modules/clearCanvas';

const d20170718 = function() {
    const canvas = document.querySelector("canvas");
    const cx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hue = 215;
    let fillColor, bgColor = `hsl(${hue}, 100%, 65%)`;

    let x = 0;
    let y = 0;
    let i = 0;

    canvas.style.backgroundColor = bgColor;

    function getRandomCoord() {
        return Math.floor(Math.random() * 200);
    }
    function drawLine(x, y) {
        x+= getRandomCoord();
        y+= getRandomCoord();
        cx.lineTo(x, y);
    }
    function fillShape() {
        fillColor = adjustColorByCoords(getRandomCoord(), 100, 50);
        cx.fillStyle = fillColor;
        cx.fill();
    }
    function adjustColorByCoords(hue, x, y) {
        return `hsl(${hue}, ${x}%, ${y}%)`;
    }

    function drawPolygon(e) {
        x = e.offsetX;
        y = e.offsetY;

        cx.beginPath();
        cx.moveTo(x, y);

        while (i < 3) {
            drawLine(x, y);
            i++;
        }
        i = 0;

        clearCanvas(cx, canvas);
        fillShape();
    }

     canvas.addEventListener('mousemove', drawPolygon);
    // canvas.addEventListener('click', setInterval(drawPolygon, 100));
}

export default d20170718;
