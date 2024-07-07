import React from 'react';
import '../styles/Loader.css';

export default function Loader() {
  return (
    <div className='loaderContainer flex'>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
    </div>
  );
};