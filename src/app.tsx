import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import GfmEditorWrite from './containers/gfmEditor/write';
import GfmEditorPreview from './containers/gfmEditor/preview';

import ToolbarTab from './containers/toolbar/tab';

const App = (ele: HTMLDivElement) => {
  ReactDOM.render(
    <Provider store={Store}>
      <React.Fragment>
        <ToolbarTab />
        <GfmEditorWrite />
        <GfmEditorPreview />
      </React.Fragment>
    </Provider>,
    ele
  );
};

export default App;
