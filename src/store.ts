import { createStore, combineReducers } from 'redux';

import { GfmEditorWriteReducer } from './modules/gfmEditor/write';
import { GfmEditorPreviewReducer } from './modules/gfmEditor/preview';

const store = createStore(
  combineReducers({
    gfmEditorWrite: GfmEditorWriteReducer,
    gfmEditorPreview: GfmEditorPreviewReducer,
  })
);

export default store;
