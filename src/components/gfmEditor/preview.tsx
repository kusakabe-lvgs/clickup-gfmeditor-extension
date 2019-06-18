import * as React from 'react';
import { Marked } from 'marked-ts';

interface IGfmEditorProps {
  gfmEditor: { value: string };
}

const GfmEditorPreview = (props: IGfmEditorProps) => {
  return (
    <div
      className="ql-editor"
      dangerouslySetInnerHTML={{
        __html: Marked.parse(props.gfmEditor.value),
      }}
    />
  );
};

export default GfmEditorPreview;
