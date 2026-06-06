import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => {
  const [condition, setCondition] = useState('equals');

  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'true', style: { top: '33%' } },
    { type: 'source', position: Position.Right, id: 'false', style: { top: '66%' } },
  ];

  return (
    <BaseNode id={id} title="Condition" nodeType="condition" handles={handles}>
      <label>
        Condition
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="greater_than">Greater Than</option>
          <option value="less_than">Less Than</option>
          <option value="is_empty">Is Empty</option>
        </select>
      </label>
    </BaseNode>
  );
};
