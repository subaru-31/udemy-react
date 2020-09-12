import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class Counter extends Component {
  render() {
    const props = this.props
    console.log(props.value)
    return <div>
      value: { props.value }
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  } 
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDidpatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDidpatchToProps)(Counter)
