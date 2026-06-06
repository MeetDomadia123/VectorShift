import { Handle } from 'reactflow';

export const BaseNode = ({ id, title, nodeType, handles = [], children }) => {
  const typeClass = nodeType ? `node-${nodeType}` : '';

  return (
    <div className={`base-node ${typeClass}`}>
      <div className="base-node-header">
        <span className="base-node-title">{title}</span>
      </div>
      <div className="base-node-content">
        {children}
      </div>
      {handles.map((h) => (
        <Handle
          key={`${id}-${h.id}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={h.style}
        />
      ))}
    </div>
  );
};
