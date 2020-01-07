import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  name: string;
}
const initialState: userState = {
  name: ''
};

export default createSlice({
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
