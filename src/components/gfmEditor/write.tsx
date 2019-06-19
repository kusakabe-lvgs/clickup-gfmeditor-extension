import * as React from 'react';

interface IGfmEditorProps {
  changeFormHandler: (params: string) => void;
  gfmEditor: { value: string };
  canShowed: boolean;
}

const GfmEditorWrite = (props: IGfmEditorProps) => {
  return props.canShowed ? (
    <div
      className="ql-editor"
      data-gram="false"
      data-placeholder='Description or type "/" for commands'
      contentEditable={true}
      onInput={e => props.changeFormHandler((e.target as HTMLDivElement).innerText)}
      suppressContentEditableWarning={true}
    />
  ) : null;
};

export default GfmEditorWrite;
