const initialState = {
  selected: 'Write',
};

interface IToolbarState {
  type: string;
}

interface IToolbarAction extends IToolbarState {
  selected: string;
}

const ToolbarReducer = (state = initialState, action: IToolbarAction) => {
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return { ...state, ...{ selected: action.selected } };
    default:
      return state;
  }
};

const ToolbarAction = {
  changeSelected(title: string): IToolbarAction {
    return { type: 'CHANGE_SELECTED', selected: title };
  },
};

export { IToolbarState };
export { ToolbarReducer };
export { ToolbarAction };
