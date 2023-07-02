import React, { useState, useEffect } from 'react';
import './RotatingCube.css';

const RotatingCube = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => rotation + 90);
    }, 40000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="rotating-cube-container">
      <div className="rotating-cube" style={{ width:'500px', height:'300px', transform: `rotateY(${rotation}deg)` }}>
        <div className="cube-face front">
          <span>Full Stack Developer</span>
        </div>
        <div className="cube-face back">
          <span>SDE</span>
        </div>
        <div className="cube-face right">
          <span>Cloud Developer</span>
        </div>
        <div className="cube-face left">
          <span>AI/ML/NLP Engineer</span>
        </div>
        <div className="cube-face top">
          <span>Top</span>
        </div>
        <div className="cube-face bottom">
          <span>Bottom</span>
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;
