import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  const [model, setModel] = useState('gpt-4');

  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return (
    <BaseNode id={id} title="LLM" nodeType="llm" handles={handles}>
      <label>
        Model
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
          <option value="claude-sonnet-4-20250514">Claude Sonnet</option>
          <option value="claude-haiku">Claude Haiku</option>
          <option value="gemini-pro">Gemini Pro</option>
        </select>
      </label>
    </BaseNode>
  );
};
