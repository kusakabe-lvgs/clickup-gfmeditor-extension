import { Marked } from 'marked-ts';

import App from '../app';
import { html2markdown } from './html2markdown';

const replaceEditor = (existedEditor: HTMLDivElement) => {
  // GFMエディタに置き換える
  const editorWrapper = document.querySelector('.cu-editor_task-view') as HTMLDivElement;
  editorWrapper.appendChild(document.createElement('div'));

  App(editorWrapper.lastChild as HTMLDivElement);

  // エディタの中身を同期させる
  const gfmEditor = document.querySelector('.ql-write') as HTMLTextAreaElement;
  const previewEditor = document.querySelector('.preview') as HTMLDivElement;
  gfmEditor.value = html2markdown(existedEditor.innerHTML);
  previewEditor.insertAdjacentHTML('afterbegin', Marked.parse(gfmEditor.value));

  // textareaの調整
  gfmEditor.addEventListener('focus', e => {
    _adjustmentHeightOfForm((e.target as HTMLTextAreaElement).value, gfmEditor);
  });
  gfmEditor.addEventListener('input', e => {
    _adjustmentHeightOfForm((e.target as HTMLTextAreaElement).value, gfmEditor);
  });
};

const _adjustmentHeightOfForm = (inputData: string, gfmEditor: HTMLTextAreaElement) => {
  const lineHeight = parseInt(gfmEditor.style.lineHeight as string, 10);
  const indentionCount = ((inputData + '\n').match(/\n/g) as string[]).length;
  gfmEditor.style.height = `${lineHeight * indentionCount}px`;
};

export { replaceEditor };
