import { createStore, combineReducers } from 'redux';

import { GfmEditorReducer } from './modules/gfmEditor';
import { ToolbarReducer } from './modules/toolbar';

const store = createStore(
  combineReducers({
    gfmEditor: GfmEditorReducer,
    toolbar: ToolbarReducer,
  })
);

export default store;
