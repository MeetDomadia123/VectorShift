import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id }) => {
  const [text, setText] = useState('');

  return (
    <BaseNode id={id} title="Note" handles={[]}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a note..."
        rows={3}
        style={{ width: '100%', resize: 'vertical' }}
      />
    </BaseNode>
  );
};
