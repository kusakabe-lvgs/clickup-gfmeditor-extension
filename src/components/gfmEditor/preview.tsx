import * as React from 'react';
import { Marked } from 'marked-ts';

interface IGfmEditorProps {
  gfmEditor: { value: string };
  canShowed: boolean;
}

const GfmEditorPreview = (props: IGfmEditorProps) => {
  return props.canShowed ? (
    <div
      className="ql-editor"
      dangerouslySetInnerHTML={{
        __html: Marked.parse(props.gfmEditor.value),
      }}
    />
  ) : null;
};

export default GfmEditorPreview;
