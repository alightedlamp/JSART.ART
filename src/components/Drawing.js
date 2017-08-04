import React, { Component } from 'react';
import DrawingWrapper from '../modules/DrawingWrapper';

class DrawingComponent extends Component {
    componentDidMount() {
        this.drawing = this.props.drawingPkg;
        this.drawingInfo = this.props.drawingInfo;
        console.log(this.drawing);
        console.log(this.drawingInfo);

        if (this.drawing) this.drawing();
    }
    render() {
        return(
            <div className="drawing">
                <canvas></canvas>
            </div>
        )
    }
}

const Drawing = DrawingWrapper(DrawingComponent);
export default Drawing;