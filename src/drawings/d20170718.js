// 20170718 -- ORAGAMI BIRDS
import React, { Component } from 'react';

import Drawing from '../components/Drawing';

import clearCanvas from '../modules/clearCanvas';

class d20170718 extends Component {
    constructor() {
        super();

        this.canvas = document.querySelector("canvas");
        this.cx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    componentDidMount() {
        let hue = 215;
        let fillColor, bgColor = `hsl(${hue}, 100%, 65%)`;

        let x = 0;
        let y = 0;
        let i = 0;

        this.canvas.style.backgroundColor = bgColor;

        function getRandomCoord() {
            return Math.floor(Math.random() * 200);
        }
        function getRandomHue() {
            return Math.floor(Math.random() * 360);
        }

        function drawLine(x, y) {
            x+= getRandomCoord();
            y+= getRandomCoord();
            this.cx.lineTo(x, y);
        }
        function fillShape() {
            fillColor = adjustColorByCoords(getRandomCoord(), 100, 50);
            this.cx.fillStyle = fillColor;
            this.cx.fill();
        }

        function adjustColorByCoords(hue, x, y) {
            return `hsl(${hue}, ${x}%, ${y}%)`;
        }

        function drawPolygon(e) {
            x = e.offsetX;
            y = e.offsetY;

            this.cx.beginPath();
            this.cx.moveTo(x, y);

            while (i < 3) {
                drawLine(x, y);
                i++;
            }
            i = 0;

            clearCanvas();
            fillShape();
        }

         this.canvas.addEventListener('mousemove', drawPolygon);
        // this.canvas.addEventListener('click', setInterval(drawPolygon, 100));
    }

    render() {
    return(
      <Drawing />
    )
  }
}

export default d20170718;