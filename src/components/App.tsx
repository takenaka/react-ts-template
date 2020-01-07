import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../stores';
import userSlice from '../stores/user';

export default () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.name);

  const onTextChange = (value: string) => {
    dispatch(userSlice.actions.setName(value));
  };

  return (
    <App>
      <h1>{name}</h1>

      <input type="text" onChange={e => onTextChange(e.target.value)} />
    </App>
  );
};

const App = styled.div`
  h1 {
    color: red;
  }
`;
