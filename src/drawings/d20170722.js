// 20170722 -- PIXELISM
import React, { Component } from 'react';

import Drawing from '../components/Drawing';

import getHeight from '../modules/getHeight';
import getWidth from '../modules/getWidth';

class d20170722 extends Component {
    constructor() {
        super();

        this.canvas = document.querySelector("canvas");
        this.cx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    componentDidMount() {
        let hue = 0;
        let saturation = 50;
        let lightness = 50;

        let x = 0;
        let y = 0;
        let w = 20;
        let h = 20;

        let isDrawing = false;
        let brushWidth = 20;
        let lastX = 0;
        let lastY = 0;

        let currentColor = '';
        let lineColor = '';

        function setNewOrigin(e) {
            x = e.offsetX;
            y = e.offsetY;
            this.cx.moveTo(x, y);
        }

        setInterval(function() {
            if (hue > 360) hue = 0;
            hue++;
            currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            this.canvas.style.backgroundColor = currentColor;
        }, 100);

        setInterval(function() {
            if (x > getWidth()) x = 0;
            x++;

            if (y > getHeight()) y = 0;
            y++;

            this.cx.fillStyle = `hsl(${hue/2}, ${saturation}%, ${lightness}%`;
            this.cx.fillRect(x, y, w, h);
        }, 1);

        function draw(e) {
            if (!isDrawing) return;

            this.cx.beginPath();
            this.cx.strokeStyle = lineColor;
            this.cx.lineWidth = brushWidth;;
            this.cx.moveTo(lastX, lastY);
            this.cx.lineTo(e.offsetX, e.offsetY);
            this.cx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY];
        }

        this.canvas.addEventListener('mousedown', function(e) {
            isDrawing = true;
            lineColor = currentColor;
            [lastX, lastY] = [e.offsetX, e.offsetY];
            setNewOrigin(e);
        });
        this.canvas.addEventListener('mousemove', draw);
        this.canvas.addEventListener('mouseup', () => isDrawing = false);
        this.canvas.addEventListener('mouseout', () => isDrawing = false);
    }

  render() {
    return(
      <Drawing />
    )
  }
}

export default d20170722;
