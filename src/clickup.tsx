import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import GfmEditorWrite from './containers/gfmEditor/write';
import GfmEditorPreview from './containers/gfmEditor/preview';

// DOMを取得のリトライ上限
const MAX_RETRY_COUNT = 10;
let retryCounter = 0;

const findTargetList = (retry_counter: number): any => {
  // try数を記録する
  retryCounter++;

  const taskCards: NodeList | null = document.querySelectorAll('.cu-panel-board__clickable-card');

  // max retry数を超えると止める
  if (retry_counter >= MAX_RETRY_COUNT) {
    clearInterval(tryGetList);
  }

  // DOMが取れたらeditorの置き換えをする
  if (taskCards.length) {
    // dom(<HTMLDivElement>document.querySelector('.ql-editor'));
    const ele: HTMLDivElement = document.querySelector('.ql-editor').parentNode;
    App(ele);
    // replaceEditor(taskCards);
    clearInterval(tryGetList);
  }
};

const tryGetList = setInterval(findTargetList, 1000);

const App = (ele: HTMLDivElement) => {
  ReactDOM.render(
    <Provider store={Store}>
      <GfmEditorWrite />
      <GfmEditorPreview />
    </Provider>,
    ele
  );
};
