import p5 from 'p5';

const sketch = p5 => {
  let [W, H] = [window.innerWidth, window.innerHeight];
  let [x, y] = [0, 0];
  let hue = 10;
  let [R, G, B] = [55, 20, 125];

  p5.setup = () => {
    let canvas = p5.createCanvas(W, H);
    canvas.background(hue, 50, 50);
    canvas.parent('drawing-container');
  };

  p5.draw = () => {
    if (p5.mouseIsPressed) {
      B = B > 255 ? 0 : B + 1;

      p5.angleMode(p5.DEGREES);

      for (let i = 0; i < 5; i++) {
        x += 10;
        y += 10;
        p5
          .strokeWeight(3)
          .stroke(R, G, B)
          .noFill()
          .rect(p5.mouseX - 50 - x, p5.mouseY - 50 + y, 100, 100);
      }
      x = 0;
      y = 0;
    }
  };
};

const d20171112_02 = () => new p5(sketch);
export default d20171112_02;
