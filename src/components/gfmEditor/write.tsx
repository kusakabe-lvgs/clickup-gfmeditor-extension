import * as React from 'react';

interface IGfmEditorProps {
  changeFormHandler: (params: string) => void;
  gfmEditor: { value: string };
  canShowedWrite: boolean;
}

const GfmEditorWrite = (props: IGfmEditorProps) => {
  return (
    <div
      className="ql-editor ql-write"
      data-gram="false"
      data-placeholder='Description or type "/" for commands'
      contentEditable={true}
      onInput={e => props.changeFormHandler((e.target as HTMLDivElement).innerText)}
      suppressContentEditableWarning={true}
      style={{ display: props.canShowedWrite ? 'block' : 'none', color: 'white' }}
    />
  );
};

export default GfmEditorWrite;
