import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnimatedWrapper from '../modules/AnimatedWrapper';

// import Drawing from '../components/Drawing';

class DrawingsComponent extends Component {
  render() {
    // const { data, drawings } = this.props;
    const data = this.props.data;

    return(
      <div>
        <div className="page">
          <div className="drawings-list">
            {
              data.map((drawing, idx) => {
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
