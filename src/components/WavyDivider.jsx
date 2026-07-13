import React from 'react';

const WavyDivider = ({ position = 'bottom', color = 'var(--background-alt)', flip = false }) => {
  const isTop = position === 'top';
  
  const style = {
    position: 'absolute',
    [position]: 0,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    transform: flip ? 'scaleX(-1)' : 'none',
    zIndex: 1,
  };

  return (
    <div style={style}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(135% + 1.3px)',
          height: '80px',
        }}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V0Z"
          style={{ fill: color }}
        ></path>
      </svg>
    </div>
  );
};

export default WavyDivider;
