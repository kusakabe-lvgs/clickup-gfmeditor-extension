import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GfmEditorPreviewComponent from '../../components/gfmEditor/preview';
import * as GfmEditorPreviewModule from '../../modules/gfmEditor/preview';

const mapStateToProps = (state: any) => {
  return {
    gfmEditorPreview: state.gfmEditorPreview,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(GfmEditorPreviewModule, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GfmEditorPreviewComponent);
