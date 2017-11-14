// d20171002_2
// First experiment with the p5 library
import p5 from 'p5';

const sketch = function(p5) {
  let [W, H] = [window.innerWidth, window.innerHeight];
  let [x, y] = [0, 0];

  p5.setup = () => {
    const canvas = p5.createCanvas(W, H);
    canvas.background(153);
    canvas.parent('drawing-container');
  };

  p5.mouseDragged = () => {
    p5.draw = function() {
      p5.noStroke();
      p5.fill(204, 201, 0);
      p5.rect(p5.mouseX, p5.mouseY + 10, 50, 50);

      p5.fill(75, 100, 255);
      p5.ellipse(p5.mouseX + 100, p5.mouseY, 72, 72);

      p5.noStroke();
      let c = p5.color(0, 126, 255, 102);
      p5.fill(c);
      p5.rect(x, y, 35, 70);
      let value = p5.alpha(c);
      p5.fill(value);
      p5.rect(x + 35, y, 35, 70);
    };

    x = x > p5.width ? 0 : x + 50;
    y = y > p5.height ? 0 : y + 50;
  };
};

const d20171002_2 = () => new p5(sketch);
export default d20171002_2;
