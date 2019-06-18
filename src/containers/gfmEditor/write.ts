import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GfmEditorWriteComponent from '../../components/gfmEditor/write';
import { IGfmEditorState, GfmEditorReducer, GfmEditorAction } from '../../modules/gfmEditor';

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
    ...bindActionCreators({ ...GfmEditorReducer, ...GfmEditorAction }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GfmEditorWriteComponent as any);
