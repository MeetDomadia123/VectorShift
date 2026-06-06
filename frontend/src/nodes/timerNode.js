import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => {
  const [duration, setDuration] = useState(1000);

  const handles = [
    { type: 'target', position: Position.Left, id: 'trigger' },
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <BaseNode id={id} title="Timer" handles={handles}>
      <label>
        Delay (ms):
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} min="0" />
      </label>
    </BaseNode>
  );
};
