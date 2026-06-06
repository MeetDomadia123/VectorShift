import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handles = [
    { type: 'target', position: Position.Left, id: 'body' },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return (
    <BaseNode id={id} title="API" handles={handles}>
      <label>
        URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
      </label>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};
