import { createStore, combineReducers } from 'redux';

export type AppState = {
};

const store = createStore(
  combineReducers<AppState>({
  })
);

export default store;
