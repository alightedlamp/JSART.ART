import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

// import Drawing from '../components/Drawing';

class DrawingsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawings: [],
      animations: []
    }
  }
  componentDidMount() {
    this.renderDrawings(this.props.drawings)
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.drawings.length && nextProps.drawings.length) {
      this.renderDrawings(nextProps.drawings);
    }
  }
  renderDrawings(drawings) {
    this.setState(
      {
        drawings: drawings,
        animations: drawings.map((_, i) => new Animated.Value(0))
      },
			() => {
				Animated.stagger(
					100,
					this.state.animations.map(anim =>
						Animated.spring(anim, { toValue: 1 })
					)
				).start();
      }
    )
  }
  render() {
    return(
      <div className="page">
        <TransitionGroup component="div">
          <div className="drawings-list">
            {
              this.state.drawings.map((d, i) => {
                const style = {
    							opacity: this.state.animations[i],
    							transform: Animated.template`
    								translate3d(0,${this.state.animations[i].interpolate({
    								inputRange: [0, 1],
    								outputRange: ["12px", "0px"]
    							})},0)
    							`
    						};
                return (
                  <Link to={`/drawing/${d.date}`} key={d.date}>
                    <Animated.div style={style}>
                      <div className="drawing-thumb" key={i}>
                        <h2>{d.date}</h2>
                      </div>
                    </Animated.div>
                  </Link>
                )
              })
            }
          </div>
        </TransitionGroup>
      </div>
    )
  }
}

export default DrawingsList;
