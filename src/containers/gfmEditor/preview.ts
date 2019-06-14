import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GfmEditorPreviewComponent from '../../components/gfmEditor/preview';
import { IGfmEditorPreviewState, GfmEditorPreviewReducer } from '../../modules/gfmEditor/preview';

interface IAppProps {
  gfmEditorPreview: IGfmEditorPreviewState;
}

const mapStateToProps = (state: IAppProps) => {
  return {
    gfmEditorPreview: state.gfmEditorPreview,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(GfmEditorPreviewReducer, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GfmEditorPreviewComponent);
