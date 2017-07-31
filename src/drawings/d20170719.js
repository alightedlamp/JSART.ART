// 20170719 -- FRUIT STRIPE
import React, { Component } from 'react';

import Drawing from '../components/Drawing';

class d20170719 extends Component {
    constructor() {
        super();

        this.canvas = document.querySelector("canvas");
        this.cx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    componentDidMount() {
        function getRandomBrightColor() {
            let hue = Math.floor(Math.random() * 360);
            return `hsl(${hue}, 100%, 50%)`
        }
        function getRandomDarkColor() {
            let hue = Math.floor(Math.random() * 360);
            return `hsl(${hue}, 100%, 25%)`
        }

        const W = this.canvas.width;
        const H = this.canvas.height;

        this.canvas.style.backgroundColor =  '#012';

        let x = 0;
        let y = 0;

        let hue = 300;

        function drawLine() {
            this.cx.beginPath();
            this.cx.strokeStyle = getRandomDarkColor();
            this.cx.lineWidth = 5;
            this.cx.moveTo(x, y);
            this.cx.lineTo(window.innerWidth, y);
            this.cx.stroke();

            y += 10;

            if (hue > 359) {
                hue = 0;
            }
            else {
                hue += 20;
            }
        }

        function drawRect(e) {
            let x = e.offsetX;
            let y = e.offsetY;

            this.cx.fillStyle = getRandomBrightColor();;
            this.cx.fillRect(x, y, 100, 50);
        }

        setInterval(drawLine, 1000)

        this.canvas.addEventListener('mousemove', drawRect);
    }

  render() {
    return(
      <Drawing />
    )
  }
}

export default d20170719;