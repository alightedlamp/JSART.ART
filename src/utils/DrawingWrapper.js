import React, { Component } from 'react';

class DrawingWrapper extends Component {
  componentDidMount() {
    if (this.props.drawing) this.props.drawing();
  }

  render() {
    return (
      <canvas></canvas>
    );
  }
}

export default DrawingWrapper;