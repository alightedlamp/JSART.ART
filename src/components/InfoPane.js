import React from 'react';

import clearCanvas from '../modules/clearCanvas';

// import triangle_up from '../svg/icons/triangle_up.svg';
// import triangle_down from '../svg/icons/triangle_down.svg';
// import trashcan from '../svg/icons/trashcan.svg';
// import github from '../svg/social/github.svg';

class InfoPane extends React.Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false
    }
  }
  toggleModal(modalOpen) {
    modalOpen = !modalOpen;
    this.setState({ modalOpen })
  }
  render() {
    const title = this.props.drawing.title;
    const date = this.props.drawing.date;
    const description = this.props.drawing.description;
    const instructions = this.props.drawing.instructions || null;
    const source = 'd' + date;
    const href = 'https://github.com/alightedlamp/JSART.ART/blob/master/src/drawings/' + source + '.js';

    const canvas = document.querySelector('canvas');
    const cx = canvas ? canvas.getContext('2d') : null;

    const toggleText = this.state.modalOpen ? 'Close' : 'Info';

    return(
      <div className="info-pane">
        {this.state.modalOpen &&
          <div className="info-drawing">
            <h4>{title} / {date}</h4>
            <p className="description">{description}</p>
            {instructions &&
              <div className="instructions">
                <h4><em>Instructions</em></h4>
                <ul>
                  {instructions.map(function(li, i) {
                    return <li key={i}>{li}</li>
                  })}
                </ul>
              </div>
            }
          </div>
        }
        <div className="controls">
          <div className="reset-canvas">
            <a onClick={() => clearCanvas(cx, canvas)}>Clear</a>
          </div>
          <div>/</div>
          <div className="modal-toggle">
            <a onClick={() => this.toggleModal(this.state.modalOpen)}>{toggleText}</a>
          </div>
          <div>/</div>
          <div className="github-link">
            <a href={href}>Source</a>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoPane;
