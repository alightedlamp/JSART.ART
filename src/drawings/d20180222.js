import { setupCanvas } from '../utils/helpers';

const d20180222 = function() {
  const [W, H] = [window.innerWidth, window.innerHeight];

  const config = {
    bg: {
      color: 'rgb(155, 40, 75)',
      size: [W, H],
      pos: [0, 0]
    },
    mg: {
      color: 'rgb(200, 50, 60)',
      size: [W / 2, H / 2],
      pos: [W / 1.5, H / 0.25]
    },
    fg: {
      color: 'rgba',
      size: [W / 4, H / 4],
      pos: [200, 400]
    }
  };

  const [BG, BG_CX] = setupCanvas(config.bg);
  // const [MG, MG_CX] = setupCanvas(config.mg);
  // const [FG, FG_CX] = setupCanvas(config.fg);

  let [x, y] = [1, 1];
  let [w, h] = [W / 2, H / 2];
  let [r, g, b, a] = [40, 200, 75, 0.9];

  const setColor = function(el, type, colors) {
    el.type = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;
  };

  const funLoop = function(x, y, z) {};

  const getRandomInt = function() {
    return Math.floor(Math.random() * W);
  };

  const run = function() {
    if (x > W && y > H) {
      BG_CX.clearRect(0, 0, W, H);
      [x, y] = [0, 0];
      // CHANGE DIRECTIONS & START OVER
      requestAnimationFrame(run);
    } else {
      requestAnimationFrame(run);
    }

    BG_CX.fillStyle = 'rgba(25, 75, 200, .4)';
    BG_CX.rect(x, y, 50, 50);
    BG_CX.fill();

    x += x * 0.01;
    y += y * 0.02;

    if (y >= H) {
      [x, y] = [x + 5, 0];
      let z = x;

      BG_CX.restore();
      for (let i = 0; i < z; i += 0.03) {
        (function() {
          setTimeout(() => {
            [x, y] = [i, i + 2];
            BG_CX.strokeStyle = 'rgba(255, 255, 135, .8)';
            BG_CX.lineWidth = 5;
            BG_CX.moveTo(x * 0.03, y * 0.03);
            BG_CX.beginPath();
            BG_CX.ellipse(
              W - x,
              H - x,
              x + 3,
              y + 3,
              45 * Math.PI / 180,
              0,
              2 * Math.PI
            );
            BG_CX.fillStyle = 'rgba(5, 180, 30, .5)';
            BG_CX.fill();
            BG_CX.stroke();
          }, 1000);
        })();
      }
      BG_CX.save();
    }

    if (x > W) {
      [x, y] = [y, x];
    }
  };

  run();
};

export default d20180222;
