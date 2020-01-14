import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';
import userModule, { setRandomName } from 'stores/user';

export default () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.name);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      dispatch(userModule.actions.setName(e.target.value));
    }
  };

  const onClearClicked = () => {
    dispatch(userModule.actions.clearName());
  };

  const onRandomClicked = async () => {
    dispatch(setRandomName());
  };

  return (
    <App>
      <h1>Index</h1>

      <h2>{name}</h2>

      <input value={name} type="text" onChange={onTextChange} />

      <button onClick={onClearClicked}>clear</button>
      <button onClick={onRandomClicked}>random</button>
    </App>
  );
};

const App = styled.div`
  h2 {
    color: gray;
    height: 2rem;
  }
`;
