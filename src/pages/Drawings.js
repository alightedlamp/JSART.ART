import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AnimatedWrapper from "../modules/AnimatedWrapper";

class DrawingsComponent extends Component {
  render() {
    const drawings = this.props.drawings;

    return(
      <div className="page">
        <div className="drawings-list">
          {
            drawings.map(function(drawing) {
             return(
              <Link to={`/drawing/d${drawing.date}`}>
                <div className="drawing-thumb" key={drawing.date}>
                  <h2>{drawing.date}</h2>
                </div>
              </Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const Drawings = AnimatedWrapper(DrawingsComponent);
export default Drawings;