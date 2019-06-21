import App from './app';

// DOMを取得のリトライ上限
const MAX_RETRY_COUNT = 10;
let retryCounter = 0;

const findTargetList = () => {
  // try数を記録する
  retryCounter++;

  const taskCards: NodeList | null = document.querySelectorAll('.cu-panel-board__clickable-card');

  // max retry数を超えると止める
  if (retryCounter >= MAX_RETRY_COUNT) {
    clearInterval(tryGetList);
  }

  // DOMが取れたらeditorの置き換えをする
  if (taskCards.length) {
    // toolbarは使わないので隠す
    const toolbar = document.querySelector('.cu-editor-toolbar') as HTMLDivElement;
    toolbar.style.display = 'none';

    const element = document.querySelector('.ql-editor') as HTMLDivElement;
    element.classList.remove('ql-disabled');

    App(element.parentNode as HTMLDivElement);
    clearInterval(tryGetList);
  }
};

const tryGetList = setInterval(findTargetList, 1000);
