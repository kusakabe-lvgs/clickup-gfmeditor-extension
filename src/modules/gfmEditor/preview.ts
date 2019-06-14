const initialState = {
  type: '',
};

interface IGfmEditorPreviewState {
  type: string;
}

const gfmEditorPreviewReducer = (state = initialState, action: IGfmEditorPreviewState) => {
  switch (action.type) {
    case 'TEST':
      return [...state, { foo: action.value }];
    default:
      return state;
  }
};

const test = (foo: string) => {
  return { type: 'TEST', value: foo };
};

export default gfmEditorPreviewReducer;
