const initialState = {
  value: '',
};

interface IGfmEditorAction {
  readonly type: string;
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

export { IGfmEditorAction };
export { GfmEditorReducer };
export { GfmEditorAction };
