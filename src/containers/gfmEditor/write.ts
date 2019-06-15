import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GfmEditorWriteComponent from '../../components/gfmEditor/write';
import { IGfmEditorWriteState, GfmEditorWriteReducer } from '../../modules/gfmEditor/write';

interface IAppProps {
  gfmEditorWrite: IGfmEditorWriteState;
}

const mapStateToProps = (state: IAppProps) => {
  return {
    gfmEditorWrite: state.gfmEditorWrite,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(GfmEditorWriteReducer, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GfmEditorWriteComponent);
