import React, { Component } from 'react';
import { Route, matchPath } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from "./utils/AnimatedSwitch";
import { firstChild } from "./utils/helpers";

import TopBar from './components/TopBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import DrawingsList from './pages/DrawingsList';
import About from './pages/About';

import Drawing from './components/Drawing';

import data from './data';

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
              <Route exact path="/" component={Home}/>
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
