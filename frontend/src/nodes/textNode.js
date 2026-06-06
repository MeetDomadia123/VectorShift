import { useState, useRef, useMemo, useCallback } from 'react';
import { Position, Handle } from 'reactflow';
import { BaseNode } from './BaseNode';

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 220, height: 'auto' });
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
      el.style.height = el.scrollHeight + 'px';
      const newWidth = Math.max(220, Math.min(400, value.length * 3 + 220));
      setDimensions({ width: newWidth, height: 'auto' });
    }
  }, []);

  const outputHandle = [
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <div style={{ width: dimensions.width }}>
      <BaseNode id={id} title="Text" nodeType="text" handles={outputHandle}>
        <label>
          Text
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleChange}
            rows={1}
            className="nodrag"
          />
        </label>
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
