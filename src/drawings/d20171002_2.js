// d20171002_2
// First experiment withe the p5 library

const d20171002_2 = function(p) {
  let rotation = 0;
  let [W, H] = [window.innerWidth, window.innerHeight];
  let [x, y] = [0, 0];
  
  p.setup = function () {
    const canvas = p.createCanvas(W, H);
    canvas.background(153);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };
  
  p.mouseDragged = () => {
    p.draw = function() {
      p.noStroke();
      p.fill(204, 201, 0);
      p.rect(p.mouseX, p.mouseY + 10, 50, 50);
    
      p.fill(75, 100, 255);
      p.ellipse(p.mouseX + 100, p.mouseY, 72, 72);

      p.noStroke();
      let c = p.color(0, 126, 255, 102);
      p.fill(c);
      p.rect(x, y, 35, 70);
      let value = p.alpha(c);
      p.fill(value);
      p.rect(x + 35, y, 35, 70);
    }

    x = x > p.width ? 0 : x + 50;
    y = y > p.height ? 0 : y + 50;
  }
}

export default d20171002_2;