import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GfmEditorPreviewComponent from '../../components/gfmEditor/preview';
import { IGfmEditorAction, GfmEditorReducer } from '../../modules/gfmEditor';
import { IToolbarAction } from '../../modules/toolbar';

interface IAppProps {
  gfmEditor: IGfmEditorAction;
  toolbar: IToolbarAction;
}

const mapStateToProps = (state: IAppProps) => {
  return {
    gfmEditor: state.gfmEditor,
    canShowed: state.toolbar.selected === 'Preview' ? true : false,
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
