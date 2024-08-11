// Loader.tsx
import React from 'react';
import './Loader.css'; // Import the CSS file

const Loader: React.FC = () => (
  <div className="loader">
    <div className="image-container">
      <img src="/BhartSmwadPng.jpeg" alt="Loading" className="image" />
      {/* <img src="/BhartSmwadPng.jpeg" alt="Loading" className="image" />
      <img src="/BhartSmwadPng.jpeg" alt="Loading" className="image" />
       */}
    </div>
  </div>
);

export default Loader;
