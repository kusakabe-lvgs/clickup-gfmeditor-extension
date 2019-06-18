import * as React from 'react';

interface IGfmEditorProps {
  changeFormHandler: (params: string) => void;
  gfmEditor: { value: string };
}

const GfmEditorWrite = (props: IGfmEditorProps) => {
  return (
    <div
      className="ql-editor"
      data-gram="false"
      data-placeholder='Description or type "/" for commands'
      contentEditable={true}
      onInput={e => props.changeFormHandler((e.target as HTMLDivElement).innerText)}
      suppressContentEditableWarning={true}
    />
  );
};

export default GfmEditorWrite;
