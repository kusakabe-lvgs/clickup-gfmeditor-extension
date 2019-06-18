import { createStore, combineReducers } from 'redux';

import { GfmEditorReducer } from './modules/gfmEditor';

const store = createStore(
  combineReducers({
    gfmEditor: GfmEditorReducer,
  })
);

export default store;
