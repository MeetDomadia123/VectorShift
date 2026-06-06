import { Handle } from 'reactflow';

export const BaseNode = ({ id, title, handles = [], children }) => {
  return (
    <div className="base-node">
      <div className="base-node-header">
        <span className="base-node-title">{title}</span>
      </div>
      <div className="base-node-content">
        {children}
      </div>
      {handles.map((h, i) => (
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
