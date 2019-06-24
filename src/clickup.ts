import App from './app';

const checkLookingTask = () => {
  const checkRenderingTask = () => {
    const toolbar = document.querySelector('.cu-editor-toolbar') as HTMLDivElement;
    toolbar.style.display = 'none';

    const existedEditor = document.querySelector('.ql-editor') as HTMLDivElement;
    existedEditor.classList.add('existed-editor');
    (existedEditor.parentNode as HTMLDivElement).classList.remove('ql-editor', 'ql-disabled');
    existedEditor.style.display = 'none';

    const editorWrapper = document.querySelector('.cu-editor_task-view') as HTMLDivElement;
    editorWrapper.appendChild(document.createElement('div'));

    App(editorWrapper.lastChild as HTMLDivElement);

    const replaceEditor = document.querySelector('.ql-write') as HTMLDivElement;
    replaceEditor.innerHTML = existedEditor.innerHTML;
  };

  const testObserver = new MutationObserver(checkRenderingTask);
  const testObserveElement = document.getElementsByClassName('task-container')[0];
  testObserver.observe(testObserveElement, {
    childList: true,
  });
};

// taskが開かれているか
const taskObserver = new MutationObserver(checkLookingTask);
const taskObserveElement = document.getElementsByTagName('task-keeper')[0];
taskObserver.observe(taskObserveElement, {
  childList: true,
});
