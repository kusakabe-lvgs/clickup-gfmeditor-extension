import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ToolbarButtonComponent from '../../components/toolbar/button';
import { IToolbarState, ToolbarReducer, ToolbarAction } from '../../modules/toolbar';

interface IAppProps {
  toolbar: IToolbarState;
}

const mapSteteToProps = (state: IAppProps) => {
  return {
    toolbar: state.toolbar,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ ...ToolbarReducer, ...ToolbarAction }, dispatch),
  };
};

export default connect(
  mapSteteToProps,
  mapDispatchToProps
)(ToolbarButtonComponent as any);
