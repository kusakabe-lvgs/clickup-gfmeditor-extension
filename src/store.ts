import { createStore, combineReducers } from 'redux';

import gfmEditorWriteReducer from './modules/gfmEditor/write';
import gfmEditorPreviewReducer from './modules/gfmEditor/preview';

const store = createStore(
  combineReducers({
    gfmEditorWrite: gfmEditorWriteReducer,
    gfmEditorPreview: gfmEditorPreviewReducer,
  })
);

export default store;
