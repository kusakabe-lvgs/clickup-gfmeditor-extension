const initialState = {
  value: '',
};

interface IGfmEditorState {
  type: string;
}

interface IGfmEditorAction extends IGfmEditorState {
  value: string;
}

const GfmEditorReducer = (state = initialState, action: IGfmEditorAction) => {
  switch (action.type) {
    case 'CHANGE_FORM_HANDLER':
      return { ...state, ...{ value: action.value } };
    default:
      return state;
  }
};

const GfmEditorAction = {
  changeFormHandler(params: string): IGfmEditorAction {
    return { type: 'CHANGE_FORM_HANDLER', value: params };
  },
};

export { IGfmEditorState };
export { GfmEditorReducer };
export { GfmEditorAction };
