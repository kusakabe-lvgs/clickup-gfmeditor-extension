import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ToolbarTabComponent from '../../components/toolbar/tab';
import { IToolbarState, ToolbarReducer } from '../../modules/toolbar';

interface IAppProps {
  toolbar: IToolbarState;
}

const mapStateToProps = (state: IAppProps) => {
  return {
    ...state.toolbar,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(ToolbarReducer, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarTabComponent as any);
