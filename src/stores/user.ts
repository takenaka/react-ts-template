import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'stores';

const initialState = {
  name: ''
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      return Object.assign({}, state, { name: action.payload });
    },
    clearName: state => {
      return Object.assign({}, state, { name: '' });
    }
  }
});

export default slice;

export const setRandomName = (): AppThunk => async dispatch => {
  try {
    const response = await fetch('https://uinames.com/api/?region=japan');
    const json: {
      name: string;
      surname: string;
      gender: string;
      region: string;
    } = await response.json();

    dispatch(slice.actions.setName(`${json.name}${json.surname}`));
  } catch {
    return;
  }
};
