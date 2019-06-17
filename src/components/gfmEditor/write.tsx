import * as React from 'react';

const GfmEditorWrite: React.SFC = () => {
  return (
    <div
      className="ql-editor"
      data-gram="false"
      data-placeholder='Description or type "/" for commands'
      contentEditable={true}
    />
  );
};

export default GfmEditorWrite;
