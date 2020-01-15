import {
  configureStore,
  combineReducers,
  Action,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import userSlice from 'stores/user';
import counterSlice from 'stores/counter';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  counter: counterSlice.reducer
});

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
