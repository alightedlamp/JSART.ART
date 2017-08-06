import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnimatedWrapper from '../modules/AnimatedWrapper';

class DrawingsComponent extends Component {
  render() {
    const drawings = this.props.drawings;

    return(
      <div>
        <div className="page">
          <div className="drawings-list">
            {
              drawings.map((drawing) => {
               return(
                <Link to={`/drawing/${drawing.date}`} key={drawing.date}>
                  <div className="drawing-thumb">
                    <h2>{drawing.date}</h2>
                  </div>
                </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const Drawings = AnimatedWrapper(DrawingsComponent);
export default Drawings;
