import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import TopBar from './components/TopBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import DrawingsList from './pages/DrawingsList';
import About from './pages/About';

import Drawing from './components/Drawing';

import data from './drawings/data';
import d20170718 from './drawings/d20170718';
import d20170719 from './drawings/d20170719';
import d20170722 from './drawings/d20170722';
import d20170724 from './drawings/d20170724';
import d20170803 from './drawings/d20170803';

const DRAWINGS_MAP = {
    'd20170803': d20170803,
    'd20170724': d20170724,
    'd20170722': d20170722,
    'd20170719': d20170719,
    'd20170718': d20170718
}
const recentDrawing = DRAWINGS_MAP[Object.keys(DRAWINGS_MAP)[0]];
const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      drawing: {}
    };

    this.data = data;
    this.drawings = DRAWINGS_MAP;
  }
  render() {
    return (
      <div className="App">
        <TopBar />
        <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} drawkingPkg={recentDrawing} drawingInfo={data[0]} />}
            </TransitionGroup>
        )}/>
        <Route
          path="/drawings"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <DrawingsList {...rest} data={this.data} />}
            </TransitionGroup>
        )}/>
        {Object.keys(this.drawings).map((d, i) => {
            return <Route path={`/drawing/${this.data[i].date}`} children={({ match, ...rest }) => (<TransitionGroup component={firstChild}>{match && <Drawing data={this.data[i]} drawing={this.drawings[d]} key={`${this.data[i].date}`}/>}</TransitionGroup>)} key={`${this.data[i].date}`}/>
        })}
        <Route
          path="/about"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <About {...rest} />}
            </TransitionGroup>
        )}/>
        <Footer />
      </div>
    );
  }
}

export default App;
