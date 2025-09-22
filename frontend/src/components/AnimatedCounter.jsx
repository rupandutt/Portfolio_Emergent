import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;
    const endCount = parseFloat(end);

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentCount = startCount + (endCount - startCount) * progress;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  const displayValue = typeof count === 'number' ? 
    (count % 1 === 0 ? count.toString() : count.toFixed(1)) : count;

  return (
    <span ref={ref} className="inline-block">
      {displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;