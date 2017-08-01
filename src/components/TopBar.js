import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class TopBar extends Component {
    render() {
        return(
            <div className="TopBar">
              <div className="Title">
                <div className="title-bg"></div>
                <div className="title-text">
                  <Link to="/">
                    <h1>JSART
                      <span className="title-dot">.</span>
                      <span className="title-a">A</span>
                      <span className="title-r">R</span>
                      <span className="title-t">T</span>
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="Links">
                <Link to="/drawings">Drawings</Link>
                <Link to="/about">Info</Link>
              </div>
            </div>
        )
    }
}

export default TopBar;