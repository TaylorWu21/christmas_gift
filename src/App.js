import React, { Component } from 'react';
import './App.css';
import reasons from './reasons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { reasons };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;