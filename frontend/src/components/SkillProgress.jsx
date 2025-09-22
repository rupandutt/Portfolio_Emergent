import React, { useState, useEffect, useRef } from 'react';

const SkillProgress = ({ skill, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setAnimate(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="body-md font-medium" style={{ color: 'var(--text-primary)' }}>
          {skill}
        </span>
        <span className="body-sm" style={{ color: 'var(--text-muted)' }}>
          {level}%
        </span>
      </div>
      <div 
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--bg-tertiary)' }}
      >
        <div
          className="h-full transition-all duration-1000 ease-out rounded-full"
          style={{
            backgroundColor: 'var(--accent-primary)',
            width: animate ? `${level}%` : '0%',
            boxShadow: animate ? '0 0 10px rgba(218, 255, 1, 0.5)' : 'none'
          }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;