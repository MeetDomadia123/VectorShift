import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState('add');

  const handles = [
    { type: 'target', position: Position.Left, id: 'a', style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: 'b', style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: 'result' },
  ];

  return (
    <BaseNode id={id} title="Math" handles={handles}>
      <label>
        Operation:
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (*)</option>
          <option value="divide">Divide (/)</option>
          <option value="modulo">Modulo (%)</option>
        </select>
      </label>
    </BaseNode>
  );
};
