let canvas = document.querySelector("canvas")
let cx = canvas.getContext("2d");

cx.strokeStyle = "blue";

var W = 0;
var H = 0;
var x = canvas.width * .5;
var y = canvas.height * .5;

renderFrame = ms => {
    requestAnimationFrame(renderFrame);
    x+= ms / 100.0;
    y+= ms / 100.0;
    W = (W + ms);
    H = (H + ms);
    cx.strokeRect(x, y, W, H);
    cx.lineWidth = 5;
    cx.strokeRect(x + 10, y + 10, W, H);

    if (x > 1000 && y > 1000) {
        x = 0;
        y = 0;
        cx.clearRect(0, 0, canvas.width, canvas.height);
        W = -W;
        H = -H;
        cx.fillStyle = "#01F6FE";
        cx.fillRect(x, y, W, H);
    }
}

renderFrame(0);