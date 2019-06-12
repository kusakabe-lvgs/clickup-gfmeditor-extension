const initialState = {
  type: '',
};

interface IGfmEditorWriteState {
  type: string;
}

const gfmEditorWriteReducer = (state = initialState, action: IGfmEditorWriteState) => {
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

export default gfmEditorWriteReducer;
