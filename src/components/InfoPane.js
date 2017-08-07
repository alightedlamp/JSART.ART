import React from 'react';

import clearCanvas from '../modules/clearCanvas';

class InfoPane extends React.Component {
  constructor(props) {
    super(props);

    this.drawing = this.props.drawing;
  }
  render() {
    const title = this.drawing.title;
    const date = this.drawing.date;
    const description = this.drawing.description;
    const instructions = this.drawing.instructions || null;
    const href = 'https://github.com/alightedlamp/JSART.ART/blob/master/src/drawings/' + this.drawing.source + '.js';

    return(
      <div className="info-pane">
        <p>{title}</p>
        <p>{date}</p>
        <p>{description}</p>
        {instructions &&
          <div>
            {instructions}
          </div>
        }
        <p><a href={href}>Source</a></p>
        <p><a onClick={() => clearCanvas()}>Reset</a></p>
      </div>
    )
  }
}

export default InfoPane;
