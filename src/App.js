import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Home from './pages/Home';
import Drawings from './pages/Drawings';
import About from './pages/About';
import Footer from './components/Footer'

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}
class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Title">
            <div className="title-bg"></div>
            <div className="title-text">
              <Link to="/">JSART
                <span className="title-dot">.</span>
                <span className="title-a">A</span>
                <span className="title-r">R</span>
                <span className="title-t">T</span>
              </Link>
            </div>
          </div>
          <div className="Links">
            <Link to="/drawings">Drawings</Link>
            <Link to="/about">Info</Link>
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
                 {match && <Drawings {...rest} />}
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
