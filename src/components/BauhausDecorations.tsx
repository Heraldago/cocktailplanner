import React from 'react';

export const BauhausGeometricComposition: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      {/* Circle Red */}
      <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#D02020] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212]" />
      {/* Square Blue rotated */}
      <div className="absolute top-10 left-12 w-20 h-20 bg-[#1040C0] border-4 border-[#121212] rotate-12 shadow-[4px_4px_0px_0px_#121212]" />
      {/* Triangle Yellow */}
      <div 
        className="absolute top-4 left-24 w-16 h-16 bg-[#F0C020] clip-triangle border-4 border-[#121212]"
        style={{ filter: 'drop-shadow(4px 4px 0px #121212)' }}
      />
    </div>
  );
};

export const BauhausCornerBadge: React.FC<{ variant?: 'circle' | 'square' | 'triangle'; color?: 'red' | 'blue' | 'yellow' }> = ({
  variant = 'circle',
  color = 'red',
}) => {
  const colorMap = {
    red: 'bg-[#D02020]',
    blue: 'bg-[#1040C0]',
    yellow: 'bg-[#F0C020]',
  };

  if (variant === 'circle') {
    return <span className={`inline-block w-3.5 h-3.5 rounded-full ${colorMap[color]} border-2 border-[#121212]`} />;
  }

  if (variant === 'square') {
    return <span className={`inline-block w-3.5 h-3.5 rounded-none ${colorMap[color]} border-2 border-[#121212]`} />;
  }

  return (
    <span 
      className={`inline-block w-3.5 h-3.5 ${colorMap[color]} clip-triangle`}
      style={{ filter: 'drop-shadow(1px 1px 0px #121212)' }}
    />
  );
};
