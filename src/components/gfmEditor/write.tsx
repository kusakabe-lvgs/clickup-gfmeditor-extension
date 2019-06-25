import * as React from 'react';

interface IGfmEditorProps {
  changeFormHandler: (params: string) => void;
  gfmEditor: { value: string };
  canShowedWrite: boolean;
}

const GfmEditorWrite = (props: IGfmEditorProps) => {
  return (
    <textarea
      className="ql-editor ql-write"
      data-gram="false"
      data-placeholder='Description or type "/" for commands'
      onInput={e => props.changeFormHandler((e.target as HTMLTextAreaElement).value)}
      rows={40}
      style={{ display: props.canShowedWrite ? 'block' : 'none', height: '300px', lineHeight: '24' }}
    />
  );
};

export default GfmEditorWrite;
