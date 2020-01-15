import React from 'react';
import styled from 'styled-components';
import counterSlice from 'stores/counter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';

export default () => {
  const dispatch = useDispatch();

  const counter = useSelector((state: RootState) => state.counter);

  const increment = () => dispatch(counterSlice.actions.increment());
  const decrement = () => dispatch(counterSlice.actions.decrement());

  return (
    <Count>
      <h1>Count</h1>

      <p>{counter}</p>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </Count>
  );
};

const Count = styled.div``;
