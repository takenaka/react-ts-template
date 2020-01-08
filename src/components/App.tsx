import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';
import userSlice from 'stores/user';

export default () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.name);
  const input = useRef<HTMLInputElement>(null);

  const onTextChange = (value: string) => {
    dispatch(userSlice.actions.setName(value));
  };

  const onButtonClicked = () => {
    if (input.current === null) {
      return;
    }

    dispatch(userSlice.actions.clearName());
    input.current.value = '';
  };

  return (
    <App>
      <h1>{name}</h1>

      <input
        ref={input}
        type="text"
        onChange={e => onTextChange(e.target.value)}
      />

      <button onClick={onButtonClicked}>clear</button>
    </App>
  );
};

const App = styled.div`
  h1 {
    color: gray;
    height: 2rem;
  }
`;
