import React, { Component } from 'react';
import AnimatedWrapper from "../modules/AnimatedWrapper";

class DrawingComponent extends Component {
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