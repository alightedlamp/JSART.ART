import React from 'react';

import clearCanvas from '../modules/clearCanvas';

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
    const href = `https://github.com/alightedlamp/JSART.ART/blob/master/src/drawings/${source}.js`;

    const canvas = document.querySelector('canvas');
    const cx = canvas ? canvas.getContext('2d') : null;

    const toggleText = this.state.modalOpen ? 'Close' : 'Info';

    return(
      <div className="info-pane-container">
        <div className="info-pane">
          <div className="controls">
            <div className="reset-canvas">
              <a onClick={() => clearCanvas(cx, canvas)}>Clear</a>
            </div>
            <div className="spacer">/</div>
            <div className="modal-toggle">
              <a onClick={() => this.toggleModal(this.state.modalOpen)}>{toggleText}</a>
            </div>
            <div className="spacer">/</div>
            <div className="github-link">
              <a href={href}>Source</a>
            </div>
          </div>
          {this.state.modalOpen &&
            <div className="info-container">
              <div className="info-drawing">
                <h4>{title} / {date}</h4>
                <p className="description">{description}</p>
                {instructions &&
                  <div className="instructions">
                    <h4><em>Controls:</em></h4>
                    <ul>
                      {instructions.map((li, i) => <li key={i}>{li}</li>)}
                    </ul>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
      )
  }
}

export default InfoPane;
