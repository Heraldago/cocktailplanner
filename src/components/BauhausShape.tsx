import React from 'react';
import { BauhausShape as ShapeType, BauhausColor } from '../utils/semiotics';

interface BauhausShapeProps {
  shape: ShapeType;
  color: BauhausColor;
  size?: number; // size in pixels (default 26)
  className?: string;
  title?: string;
}

export const BauhausShape: React.FC<BauhausShapeProps> = ({
  shape,
  color,
  size = 26,
  className = '',
  title,
}) => {
  const colorHexMap: Record<BauhausColor, string> = {
    yellow: '#F0C020',
    blue: '#1040C0',
    red: '#D02020',
  };

  const fill = colorHexMap[color] || '#F0C020';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      title={title}
      style={{
        width: size,
        height: size,
        filter: 'drop-shadow(2px 2px 0px #121212)',
      }}
    >
      {shape === 'square' && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            fill={fill}
            stroke="#121212"
            strokeWidth="2.5"
          />
        </svg>
      )}

      {shape === 'circle' && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            fill={fill}
            stroke="#121212"
            strokeWidth="2.5"
          />
        </svg>
      )}

      {shape === 'triangle' && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="12,2 22,21 2,21"
            fill={fill}
            stroke="#121212"
            strokeWidth="2.5"
            strokeLinejoin="miter"
          />
        </svg>
      )}
    </div>
  );
};
