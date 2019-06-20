import * as React from 'react';
import { Marked } from 'marked-ts';

interface IGfmEditorProps {
  gfmEditor: { value: string };
  canShowedPreview: boolean;
}

const GfmEditorPreview = (props: IGfmEditorProps) => {
  return (
    <div
      className="ql-editor preview"
      dangerouslySetInnerHTML={{
        __html: Marked.parse(props.gfmEditor.value),
      }}
      style={{ display: props.canShowedPreview ? 'block' : 'none' }}
    />
  );
};

export default GfmEditorPreview;
