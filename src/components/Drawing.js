import React, { Component } from 'react';
import AnimatedWrapper from '../modules/AnimatedWrapper';

class DrawingComponent extends Component {
    componentDidMount() {
        this.drawing = this.props.drawingPkg;
        this.drawingInfo = this.props.drawingInfo;

        if (this.drawing) this.drawing();
    }
    render() {
        return(
            <div className="drawing">
                {this.drawingInfo &&
                    <h2 className="drawing-title">{this.drawingInfo.title}</h2>
                }
                <canvas></canvas>
            </div>
        )
    }
}

const Drawing = AnimatedWrapper(DrawingComponent);
export default Drawing;