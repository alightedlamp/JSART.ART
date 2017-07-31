import React, { Component } from 'react';
import AnimatedWrapper from "../modules/AnimatedWrapper";

class DrawingComponent extends Component {
    componentDidMount() {
        let canvas = document.querySelector("canvas");
        let cx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    render() {
        return(
            <div>
                <canvas></canvas>
            </div>
        )
    }
}

const Drawing = AnimatedWrapper(DrawingComponent)
export default Drawing;