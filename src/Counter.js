import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0 
    }
  }
  handlePlus = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleMinus = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    console.log(this.state)
    return <div>
      count: { this.state.count}
      <button onClick={this.handlePlus}>+</button>
      <button onClick={this.handleMinus}>-</button>
    </div>
  } 
}

export default Counter