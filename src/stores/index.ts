import { configureStore, combineReducers } from '@reduxjs/toolkit';

import userSlice from 'stores/user';

const reducer = combineReducers({
  user: userSlice.reducer
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export default store;
