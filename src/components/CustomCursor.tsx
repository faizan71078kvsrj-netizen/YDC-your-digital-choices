import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive-item')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    if (visible) {
      animationFrameId = requestAnimationFrame(updateTrail);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Precision Dot */}
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `translate(-50%, -50%) scale(${hovered ? 1.5 : 1})` }}
      />
      {/* Soft Trail ring */}
      <div
        id="cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${hovered ? 1.8 : 1})`,
          backgroundColor: hovered ? 'rgba(227, 30, 36, 0.05)' : 'transparent'
        }}
      />
    </>
  );
}
