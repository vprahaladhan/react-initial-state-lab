import React, { Component } from 'react'; 

// your Bomb code here!
class Bomb extends Component {
  constructor(props) {
    super();
    console.log('Initial count > ', props.initialCount);
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    return this.state.secondsLeft ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!';
  }
}

export default Bomb;