import React, { Component } from 'react';

import TopBar from './components/TopBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Footer />
      </div>
    );
  }
}

export default App;
