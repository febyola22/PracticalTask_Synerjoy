import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/slices/counterSlice';

function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const containerStyle = {
    paddingLeft: '20px',
  };

  const buttonStyle = {
    fontSize: '1em',
    padding: '5px 15px',
    margin: '5px',
  };

  const inputStyle = {
    fontSize: '1em',
    padding: '5px',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2>Counter</h2>
      <div>
        <button style={buttonStyle} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button style={buttonStyle} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div>
        <input type="number" style={inputStyle} onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))} placeholder="Enter value" />
        <button style={buttonStyle} onClick={() => dispatch(incrementByAmount(5))}>
          Add 5
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;
