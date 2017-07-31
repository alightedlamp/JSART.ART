import React, { Component } from 'react';
import AnimatedWrapper from "../modules/AnimatedWrapper";

class DrawingComponent extends Component {
    render() {
        return(
            <div className="drawing">
                <canvas></canvas>
            </div>
        )
    }
}

const Drawing = AnimatedWrapper(DrawingComponent)
export default Drawing;