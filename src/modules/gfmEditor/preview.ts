const initialState = {
  value: '',
};

interface IGfmEditorPreviewState {
  type: string;
  value: string;
}

const gfmEditorPreviewReducer = (state = initialState, action: IGfmEditorPreviewState) => {
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

export default gfmEditorPreviewReducer;
