import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import userSlice from 'stores/user';

const reducer = combineReducers({
  user: userSlice.reducer
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
