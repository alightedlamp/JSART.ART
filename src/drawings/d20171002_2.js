// d20171002_2
const d20171002_2 = function(p) {
  const canvas = document.querySelector('canvas');

  let rotation = 0;
  let [W, H] = [window.innerWidth, window.innerHeight];
  let [x, y] = [50, 150];
  
  p.setup = function () {
    const canvas = p.createCanvas(W, H);
    canvas.background(153);
  };

  
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };
  
  const renderDrawing = () => {
    if (x > p.width) {
      x = 50;
    }
    else {
      x += 10;
    }
    if (y > p.height) {
      y = 50;
    }
    else {
      y += 10;
    }
    p.draw = function() {
      p.noStroke();
      p.fill(204, 201, 0);
      p.rect(x, 150, 50, 50);
    
      p.fill(204);
      p.quad(189, 18, 216, 18, 216, 360, 144, 360);
    
      p.fill(255);
      p.ellipse(252, y, 72, 72);
    }
  }

  setInterval(renderDrawing, 1000);

  p.mouseClicked = () => [x, y] = [p.mouseX, p.mouseY];
 }

export default d20171002_2;