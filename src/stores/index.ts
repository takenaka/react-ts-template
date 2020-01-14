import {
  configureStore,
  combineReducers,
  Action,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import userModule from 'stores/user';
import counterModule from 'stores/counter';

const rootReducer = combineReducers({
  user: userModule.reducer,
  counter: counterModule.reducer
});

const middlewares = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
