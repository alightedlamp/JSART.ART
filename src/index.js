import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App';
import Home from './pages/Home';
import Drawings from './pages/Drawings';
import About from './pages/About';

import Drawing from './components/Drawing';

import data from './drawings/DRAWINGS_DATA';
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

ReactDOM.render(
    <BrowserRouter>
        <div>
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
                  {match && <Drawings {...rest} drawings={data} drawingsMap={DRAWINGS_MAP} />}
                </TransitionGroup>
            )}/>
            {Object.keys(DRAWINGS_MAP).map((d, i) => {
                return <Route path={`/drawing/${data[i].date}`} children={({ match, ...rest }) => (<TransitionGroup component={firstChild}>{match && <Drawing drawingPkg={DRAWINGS_MAP[d]} drawingInfo={data[i]} key={`${data[i].date}`}/>}</TransitionGroup>)}/>
            })}
            <Route
              path="/about"
              children={({ match, ...rest }) => (
                <TransitionGroup component={firstChild}>
                  {match && <About {...rest} />}
                </TransitionGroup>
            )}/>
            <App />
          </div>
    </BrowserRouter>,
    document.getElementById("root")
);

registerServiceWorker();