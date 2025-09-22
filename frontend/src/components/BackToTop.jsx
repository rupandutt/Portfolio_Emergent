import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        backgroundColor: 'var(--accent-primary)',
        color: 'var(--bg-primary)',
        boxShadow: '0 4px 20px rgba(218, 255, 1, 0.3)',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = '0 6px 25px rgba(218, 255, 1, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 20px rgba(218, 255, 1, 0.3)';
      }}
    >
      <ArrowUp size={20} className="mx-auto" />
    </button>
  );
};

export default BackToTop;