import { replaceEditor } from './feature/replaceEditor';

const checkLookingTask = () => {
  const checkRenderingTask = () => {
    // toolbarを隠す
    const toolbar = document.querySelector('.cu-editor-toolbar') as HTMLDivElement;
    toolbar.style.display = 'none';

    // 既存のWYSIWYGエディタを隠す
    const existedEditor = document.querySelector('.ql-editor') as HTMLDivElement;
    existedEditor.classList.add('existed-editor');
    (existedEditor.parentNode as HTMLDivElement).classList.remove('ql-editor', 'ql-disabled');
    existedEditor.style.display = 'none';

    replaceEditor(existedEditor);
  };

  // taskが描画されているか
  const taskPreviewObserver = new MutationObserver(checkRenderingTask);
  const taskPreviewObserveElement = document.getElementsByClassName('task-container')[0];
  taskPreviewObserver.observe(taskPreviewObserveElement, {
    childList: true,
  });
};

// taskが開かれているか
const taskObserver = new MutationObserver(checkLookingTask);
const taskObserveElement = document.getElementsByTagName('task-keeper')[0];
taskObserver.observe(taskObserveElement, {
  childList: true,
});
