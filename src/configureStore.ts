import { combineReducers, createStore as reduxCreateStore } from "redux";

declare global {
  interface IWindow {
    store: any;
  }
}

const createStore = () => {
  const store = reduxCreateStore(
    combineReducers({
    })
  );

  return store;
};

export default createStore;
