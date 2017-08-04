// 20170803
const d20170803 = function() {
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = 'red';

    const [w, h] = [window.innerWidth, window.innerHeight];
    let [x, y] = [w / 2, h / 2];
    let direction = '';

    const keys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }

    cx.strokeStyle = 'lightgreen';
    cx.beginPath();
    cx.moveTo(w / 2, h / 2);

    function changeDirection(e) {
        // change to handle negatives
        if (keys[e.keyCode] === 'up') y--;
        if (keys[e.keyCode] === 'down') y++;
        if (keys[e.keyCode] === 'right') x++;
        if (keys[e.keyCode] === 'left') x--;

        cx.lineWidth = '5';
        cx.lineTo(x, y);
        cx.stroke();
    }

    window.addEventListener('keydown', changeDirection, true);
}

export default d20170803;