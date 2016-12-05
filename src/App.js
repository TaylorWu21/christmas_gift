import React, { Component } from 'react';
import './App.css';
import reasons from './reasons';

class App extends Component {
  constructor(props) {
    super(props);
    // this.shuffle = this.shuffle.bind(this);
    this.state = { reasons, count: 1, index: 0 };
  }


  componentWillMount() {
    this.setState({ reasons: this.shuffle(this.state.reasons) });
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  getReason = () => {
    let count = this.state.count + 1;
    let index = this.state.index + 1;
    if(index > this.state.reasons.length - 1) {
      index = 0;
      count = 1;
       this.setState({ count, index });
    } else {
      this.setState({ count, index });
    }
  }

  render() {
    return (
      <div id="container">
        <div className='content'>
          <div id='header'>
            <div>Reasons Why I Love You</div>
          </div>
          <div id='body'>
            <div>{this.state.reasons[this.state.index]}</div>
          </div>
        </div>
        <div id='footer'>
          <button className='btn' onClick={this.getReason}>{`Reason ${this.state.count}`}</button>
        </div>
      </div>
    );
  }
}

export default App;
