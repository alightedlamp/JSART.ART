// 20170803
import React from 'react';

import drawLine from '../modules/drawLine';
import getNewCoords from '../modules/getNewCoords';
import getRandomColor from '../modules/getRandomColor';
import clearCanvas from '../modules/clearCanvas';

const d20170803 = () => {
    const canvas = document.querySelector('canvas');
    const cx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = 'red';

    const size = { w: window.innerWidth, h: window.innerHeight };
    let coords = { x: size.w / 2, y: size.h / 2 };
    let direction = 'right';
    let speed = 10;
    let hue = 240;
    let brushSize = 7;
    let color = `hsl(${hue}, 50%, 75%)`;
    let isDrawing = true;
    let frameCount = 0;

    const setBg = () => {
      // make this fade to new color
      canvas.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`;
    }

    const directionKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    }
    const speedKeys = {
      49: 2,
      50: 4,
      51: 6,
      52: 8,
      53: 10,
      54: 12,
      55: 14,
      56: 16,
      57: 18,
    }
    const brushSizeKeys = {
      189: 'decrease',
      187: 'increase'
    }

    const renderFrame = (ms) => {
      requestAnimationFrame(renderFrame);
      if (isDrawing) {
        coords = getNewCoords(size, coords, speed, brushSize, direction);
      }
      frameCount++;
      color = getRandomColor();
      if (frameCount % 5 == 0) {
        hue = Math.floor(Math.random() * 360);
      }
      drawLine(cx, coords, hue, brushSize, frameCount);
    }

    const handler = (e) => {
      if (directionKeys.hasOwnProperty(e.keyCode)) {
        // setBg();
        direction = directionKeys[e.keyCode];
      }
      if (brushSizeKeys.hasOwnProperty(e.keyCode)) {
        brushSize = brushSizeKeys[e.keyCode] === 'increase' ? brushSize += 5 : brushSize -= 5;
      }
      if (speedKeys.hasOwnProperty(e.keyCode)) {
        speed = speedKeys[e.keyCode];
      }
      if (e.keyCode === 32) isDrawing = !isDrawing;
      // clear canvas - doesn't restart yet
      if (e.keyCode === 27) {
        clearCanvas(cx, canvas);
        start();
      }
    }

    const start = () => {
      coords = { x: size.w / 2, y: size.h / 2 };
      direction = 'right';
      renderFrame(0);
    }

    start();
    window.addEventListener('keydown', handler, true);

    // add instructions modal (make this reusable component)
    const instructionsStyle = {
      'position': 'absolute',
      'zIndex': 99,
      'backgroundColor': 'white',
      'width': 400,
      'height': 300,
      'left': `${size.w - 200}`,
      'right': `${size.h - 200}`
    }
    const instructions = (
      <div style={instructionsStyle}>
        <ul>
          <li>Number keys 1 - 9 increase speed</li>
          <li>+ / - adjust line size</li>
          <li>Arrow keys change direction</li>
        </ul>
        <p>Good luck.</p>
      </div>
    )
    // put the modal in the DOMathon
    setTimeout(function() {
      // remove modal
    }, 5000);
}

export default d20170803;
