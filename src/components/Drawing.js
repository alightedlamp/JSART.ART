import React, { Component } from 'react';
import DrawingWrapper from '../modules/DrawingWrapper';

class DrawingComponent extends Component {
    componentWillUnmount() {
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = "yes";
    }
    componentDidMount() {
      this.data = this.props.data;
      this.drawing = this.props.drawing;
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";

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
