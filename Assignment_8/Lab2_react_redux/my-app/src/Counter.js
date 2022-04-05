import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions/index';

class Counter extends Component {  

  render() {

    const { counter, increment, decrement, reset } = this.props;

    return (
      <div className='App'>
        <div>
          Counter {counter}
        </div>
        <div>
          <button onClick={increment}>Increment By</button>
        </div>
        <div>
          <button onClick={decrement}>Decrement By</button>
        </div>
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);