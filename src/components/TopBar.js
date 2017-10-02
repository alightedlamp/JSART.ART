import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InfoPane from './InfoPane';

class TopBar extends Component {
    render() {
        return(
            <div className="TopBar">
              <div className="Links">
                <Link to="/drawings">Drawings</Link>
                <Link to="/about">Info</Link>
              </div>
            </div>
        )
    }
}

export default TopBar;
