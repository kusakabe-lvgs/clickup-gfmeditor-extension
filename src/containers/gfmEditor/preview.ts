import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GfmEditorPreviewComponent from '../../components/gfmEditor/preview';
import { IGfmEditorState, GfmEditorReducer } from '../../modules/gfmEditor';

interface IAppProps {
  gfmEditor: IGfmEditorState;
}

const mapStateToProps = (state: IAppProps) => {
  return {
    gfmEditor: state.gfmEditor,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(GfmEditorReducer, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GfmEditorPreviewComponent as any);
