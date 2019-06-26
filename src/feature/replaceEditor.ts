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
  // TODO: decoratorとかでやりたい
  (gfmEditor as HTMLTextAreaElement).value = html2markdown(existedEditor.innerHTML);
  const previewEditor = document.querySelector('.preview') as HTMLDivElement;
  previewEditor.insertAdjacentHTML('afterbegin', Marked.parse(gfmEditor.value));

  // textareaの調整
  const lineHeight = parseInt(gfmEditor.style.lineHeight as string, 10);
  gfmEditor.addEventListener('input', e => {
    const indentionCount = (((e.target as HTMLTextAreaElement).value + '\n').match(/\n/g) as string[]).length;
    gfmEditor.style.height = `${lineHeight * indentionCount}px`;
  });

  gfmEditor.addEventListener('focus', e => {
    const indentionCount = (((e.target as HTMLTextAreaElement).value + '\n').match(/\n/g) as string[]).length;
    gfmEditor.style.height = `${lineHeight * indentionCount}px`;
  });
};

export { replaceEditor };
