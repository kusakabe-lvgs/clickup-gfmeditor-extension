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
    case 'TEST':
      return { ...state, ...{ value: action.value } };
    default:
      return state;
  }
};

export const test = (foo: string) => {
  return { type: 'TEST', value: foo };
};

export { IGfmEditorWriteState };
export { GfmEditorWriteReducer };
