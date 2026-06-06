import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id }) => {
  const [text, setText] = useState('');

  return (
    <BaseNode id={id} title="Note" nodeType="note" handles={[]}>
      <label>
        Note
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a note..."
          rows={3}
          className="nodrag"
        />
      </label>
    </BaseNode>
  );
};
