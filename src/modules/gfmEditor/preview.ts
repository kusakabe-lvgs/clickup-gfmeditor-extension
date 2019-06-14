const initialState = {
  value: '',
};

interface IGfmEditorPreviewState {
  type: string;
}

interface IGfmEditorPreviewAction extends IGfmEditorPreviewState {
  value: string;
}

const GfmEditorPreviewReducer = (state = initialState, action: IGfmEditorPreviewAction) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, ...{ value: action.value } };
    default:
      return state;
  }
};

export const test = (foo: string) => {
  return { type: 'TEST', value: foo };
};

export { IGfmEditorPreviewState };
export { GfmEditorPreviewReducer };
