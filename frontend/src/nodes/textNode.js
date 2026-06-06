import { useState, useRef, useMemo, useCallback } from 'react';
import { Position, Handle } from 'reactflow';
import { BaseNode } from './BaseNode';

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });
  const textareaRef = useRef(null);

  const variables = useMemo(() => {
    const matches = [];
    let match;
    while ((match = VAR_REGEX.exec(currText)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }
    return matches;
  }, [currText]);

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setCurrText(value);
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      const newHeight = Math.max(80, el.scrollHeight + 50);
      const newWidth = Math.max(200, Math.min(400, value.length * 3 + 200));
      setDimensions({ width: newWidth, height: newHeight });
    }
  }, []);

  const outputHandle = [
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <div style={{ width: dimensions.width, minHeight: dimensions.height }}>
      <BaseNode id={id} title="Text" handles={outputHandle}>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleChange}
          style={{ width: '100%', resize: 'none', minHeight: '40px' }}
          rows={1}
        />
      </BaseNode>
      {variables.map((varName, i) => (
        <Handle
          key={`${id}-var-${varName}`}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{ top: `${((i + 1) / (variables.length + 1)) * 100}%` }}
        />
      ))}
    </div>
  );
};
