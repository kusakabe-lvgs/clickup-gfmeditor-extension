const initialState = {
  value: '',
};

interface IGfmEditorWriteState {
  type: string;
}

interface IGfmEditorWriteAction extends IGfmEditorWriteState {
  value: string;
}

const GfmEditorWriteReducer = (state = initialState, action: IGfmEditorWriteAction) => {
  switch (action.type) {
    case 'CHANGE_FORM_HANDLER':
      return { ...state, ...{ value: action.value } };
    default:
      return state;
  }
};

const GfmEditorWriteAction = {
  changeFormHandler(params: string): IGfmEditorWriteAction {
    return { type: 'CHANGE_FORM_HANDLER', value: params };
  },
};

export { IGfmEditorWriteState };
export { GfmEditorWriteReducer };
export { GfmEditorWriteAction };
