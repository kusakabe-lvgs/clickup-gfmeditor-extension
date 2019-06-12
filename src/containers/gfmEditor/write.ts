import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GfmEditorWriteComponent from '../../components/gfmEditor/write';
import * as TopModule from '../../modules/gfmEditor/write';

const mapStateToProps = (state: any) => {
  return {
    top: state.top,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(TopModule, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GfmEditorWriteComponent);
