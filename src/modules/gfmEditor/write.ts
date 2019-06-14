const initialState = {
  value: '',
};

interface IGfmEditorWriteState {
  type: string;
  value: string;
}

const gfmEditorWriteReducer = (state = initialState, action: IGfmEditorWriteState) => {
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

export default gfmEditorWriteReducer;
