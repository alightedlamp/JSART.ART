import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Home from './pages/Home';
import Drawings from './pages/Drawings';
import About from './pages/About';
import Footer from './components/Footer';

import data from './drawings/DRAWINGS_DATA';
import d20170718 from './drawings/d20170718';
import d20170719 from './drawings/d20170719';
import d20170722 from './drawings/d20170722';
import d20170724 from './drawings/d20170724';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      drawings: data,
      map: {}
    }
  }
  componentDidMount() {
    const DRAWINGS_MAP = {
      'd20170724': d20170724,
      'd20170722': d20170722,
      'd20170719': d20170719,
      'd20170718': d20170718
    }
    this.setState({ map: DRAWINGS_MAP });
  }
  render() {
    return (
      <div className="App">
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
          <Route
            exact
            path="/"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Home {...rest} />}
              </TransitionGroup>
          )}/>
          <Route
             path="/drawings"
             children={({ match, ...rest }) => (
               <TransitionGroup component={firstChild}>
                 {match && <Drawings {...rest} drawings={this.state.drawings} drawingsMap={this.state.map} />}
               </TransitionGroup>
          )}/>
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
