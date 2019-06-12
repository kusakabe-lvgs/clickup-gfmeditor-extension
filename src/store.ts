import { createStore, combineReducers } from 'redux';

import gfmEditorWriteReducer from './modules/gfmEditor/write';

const store = createStore(
  combineReducers({
    gfmEditorWrite: gfmEditorWriteReducer,
  })
);

export default store;
