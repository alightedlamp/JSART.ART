import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class BackLink extends Component {
    render() {
        return(
            <div className="back-link">
                <a onClick={e => {
                    e.preventDefault();
                      this.props.history.goBack();
                    }}
                >←</a>
            </div>
        )
    }
}

export default BackLink;