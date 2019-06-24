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
      const existedEditor = document.querySelector('.existed-editor') as HTMLDivElement;
      existedEditor.innerHTML = action.value;

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
export { GfmEditorAction };
export { GfmEditorReducer };
