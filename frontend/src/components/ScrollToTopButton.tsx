import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false); 
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.min((scrollTop / windowHeight) * 100, 100);
      setScrollProgress(progress);

      if (scrollTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundColor: '#10b981',
        color: '#fff',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}
      aria-label="Scroll to top"
    >
      <div
        style={{
          position: 'absolute',
          width: '70%',
          height: '70%',
          backgroundColor: '#fff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: `${scrollProgress}%`,
            height: `${scrollProgress}%`,
            backgroundColor: '#10b981',
            borderRadius: '50%',
            transition: 'width 0.3s ease, height 0.3s ease',
          }}
        />
      </div>
      <span
        style={{
          fontSize: '1.2rem', // Smaller arrow size to fit the smaller button
          fontWeight: 'bold',
          zIndex: 1,
        }}
      >
        ↑
      </span>
    </button>
  );
};

export default ScrollToTopButton;
