import React from 'react';

class Canvas extends React.Component {
  constructor(config) {
    super();

    this.state = {
      style: '',
      config: config
    };
  }
  render() {
    return <canvas style={this.props.style} />;
  }
}

export default Canvas;
