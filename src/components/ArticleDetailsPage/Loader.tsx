// Loader.tsx
import React from 'react';
import './Loader.css'; // Import the CSS file

const Loader: React.FC = () => (
  <div className="loader">
    <div className="bubble-container">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  </div>
);

export default Loader;
