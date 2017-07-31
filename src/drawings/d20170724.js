// 20170724 -- ERASER
import React, { Component } from 'react';

import Drawing from '../components/Drawing';
import BackLink from '../components/BackLink';

import getHeight from '../modules/getHeight';
import getWidth from '../modules/getWidth';
import clearCanvas from '../modules/clearCanvas';

class d20170724 extends Component {
  componentDidMount() {
    console.log('drawing loaded');
    const canvas = document.querySelector("canvas");
    const cx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = 'blue';

    let [x, y] = [getWidth(), getHeight()];
    let [lastX, lastY] = [x, y];
    let [w, h] = [50, 50];
    let [directionX, directionY] = ['left', 'up'];
    let [hue, saturation, lightness] = ['', 75, 50];

    let fillColor = '';

    const audioLoop = new Audio('../audio/20170710_pawsweat.wav');
    audioLoop.crossOrigin = 'anonymous';
    audioLoop.autoplay = true;
    audioLoop.loop = true;

    const ac = new AudioContext();
    const source = ac.createMediaElementSource(audioLoop);
    source.connect(ac.destination);

    const analyser = ac.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);

    function rectangleBounce() {
      hue = ac.currentTime;

      if (x == 0) directionX = 'right';
      if (x > (canvas.width - h)) directionX = 'left';
      if (directionX == 'right') x++;
      else x--;

      if (y == 0) directionY = 'down';
      if (y > (canvas.height - w)) directionY = 'up';
      if (directionY == 'up') y--;
      else y++;

      cx.clearRect(lastX, lastY, w, h);
      cx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      cx.fillRect(x, y, w, h);
      [lastX, lastY] = [x, y];
    }

    function drawLines(e) {
      hue = e.offsetX < 360 ? e.offsetX : e.offsetY;

      const audioData = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(audioData);
      let len = audioData.length;

      cx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
      cx.beginPath();
      cx.moveTo(e.offsetX, e.offsetY);
      cx.lineWidth = '5';
      cx.lineTo(x, y);
      cx.stroke();
    }

    setInterval(rectangleBounce, 10);
    canvas.addEventListener('mousemove', drawLines);
  }

  render() {
    return(
      <div>
        <Drawing />
      </div>
    )
  }
}

export default d20170724;