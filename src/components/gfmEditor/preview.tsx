import * as React from 'react';

interface IGfmEditorProps {
  gfmEditor: { value: string };
}

const GfmEditorPreview = (props: IGfmEditorProps) => {
  return <div className="ql-editor">{props.gfmEditor.value}</div>;
};

export default GfmEditorPreview;
