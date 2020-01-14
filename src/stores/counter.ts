import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const counterModule = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export default counterModule;
