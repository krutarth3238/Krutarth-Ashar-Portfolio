import React, { useRef, useState } from 'react';

interface SpatialGlassPanelProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export const SpatialGlassPanel: React.FC<SpatialGlassPanelProps> = ({
  children,
  className = '',
  enableTilt = true,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCoords({ x, y, opacity: 1 });

    if (enableTilt) {
      // Subtly tilts 2-3 degrees as specified in guide section 11
      const tiltX = (y - 50) * -0.04;
      const tiltY = (x - 50) * 0.04;
      setTilt({ x: tiltX, y: tiltY });
    }
  };

  const handlePointerLeave = () => {
    setCoords((prev) => ({ ...prev, opacity: 0 }));
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={panelRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`spatial-glass-card relative overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
      }}
    >
      {/* Dynamic Specular Glare in Light Mode (Guide 02: cursor light response on glass surface) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: coords.opacity,
          background: `radial-gradient(450px circle at ${coords.x}% ${coords.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};
