import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GfmEditorWriteComponent from '../../components/gfmEditor/write';
import { IGfmEditorAction, GfmEditorReducer, GfmEditorAction } from '../../modules/gfmEditor';
import { IToolbarAction } from '../../modules/toolbar';

interface IAppProps {
  gfmEditor: IGfmEditorAction;
  toolbar: IToolbarAction;
}

const mapStateToProps = (state: IAppProps) => {
  return {
    gfmEditor: state.gfmEditor,
    canShowedWrite: state.toolbar.selected === 'Write' ? true : false,
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
