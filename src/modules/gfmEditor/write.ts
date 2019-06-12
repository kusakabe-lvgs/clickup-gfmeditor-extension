const initialState = {
  foo: '',
};

interface IAction {
  type: string;
  value: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'TEST':
      return [...state, {foo: action.value}]
    default:
      return state;
  }
};

export const test = (foo: string) => {
  return { type: 'TEST', value: foo };
};

export default reducer;
