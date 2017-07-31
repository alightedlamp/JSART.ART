import React, { Component } from 'react';
import AnimatedWrapper from "../modules/AnimatedWrapper";

class DrawingComponent extends Component {
    render() {
        const drawing = this.props.drawingPkg;
        const title = this.props.title;

        return(
            <div className="drawing">
                <h2 className="drawing-title">{this.title}</h2>
                <canvas></canvas>
            </div>
        )
    }
}

const Drawing = AnimatedWrapper(DrawingComponent)
export default Drawing;