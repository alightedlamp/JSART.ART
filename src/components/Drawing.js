import React, { Component } from 'react';
import * as Animated from "animated/lib/targets/react-dom";

class Drawing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawing: {},
      animate: new Animated.Value(0)
    }
  }
  componentWillUnmount() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
  }
  componentDidMount() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";

    if (this.props.drawings.length) {
      this.renderDrawing(this.props.drawings);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.drawings.length && nextProps.drawings.length) {
      this.renderDrawing(nextProps.drawings);
    }
  }
  renderDrawing(drawings) {
    let currentDrawing = drawings.filter(d => {
      return (d.date == this.props.match.params.date);
    });
    if (currentDrawing.length) {
      console.log(currentDrawing[0].source);
      // Can I not set a function as a value in state?
      // this.setState({ drawing: currentDrawing[0].source });
      currentDrawing[0].source();
    }
  }
  render() {
    return(
      <div className="drawing">
          <canvas></canvas>
      </div>
    )
  }
}

export default Drawing;
