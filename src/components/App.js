import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from "../utils/AnimatedSwitch";

import TopBar from './TopBar';

import Home from '../pages/Home';
import DrawingsList from '../pages/DrawingsList';
import Drawing from '../pages/Drawing';
import About from '../pages/About';

import data from '../utils/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawings: []
    };
  }
  componentDidMount() {
    this.setState({
      drawings: data
    });
  }
  render() {
    return (
      <div className="App">
        <TopBar />
        <Route render={({ location }) => (
          <TransitionGroup component="main">
            <AnimatedSwitch key={location.key} location={location}>
              <Route
                exact
                path="/"
                render={props => (
                  <DrawingsList {...props} drawings={this.state.drawings}/>
                )}
              />
              <Route
                exact
                path="/drawings"
                render={props => (
                  <DrawingsList {...props} drawings={this.state.drawings}/>
                )}
              />
              <Route
                path="/drawing/:date"
                render={props => (
                  <Drawing {...props} drawings={this.state.drawings}/>
                )}
              />
              <Route
                exact
                path="/about"
                render={props => (
                  <About {...props} />
                )}
              />
            </AnimatedSwitch>
          </TransitionGroup>
        )}/>
      </div>
    );
  }
}

export default App;
