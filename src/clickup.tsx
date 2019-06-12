import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import GfmEditorWrite from './containers/gfmEditor/write';

const App = () => (
  <Provider store={Store}>
    <GfmEditorWrite />
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('.app'));
