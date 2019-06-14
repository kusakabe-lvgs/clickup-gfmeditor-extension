import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GfmEditorWriteComponent from '../../components/gfmEditor/write';
import * as GfmEditorWriteModule from '../../modules/gfmEditor/write';

const mapStateToProps = (state: any) => {
  return {
    gfmEditorWrite: state.gfmEditorWrite,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(GfmEditorWriteModule, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GfmEditorWriteComponent);
