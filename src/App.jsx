import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';

export default function App() {

  return (
    <>
    <div className="wrapper">
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <div className="floatingIcon"></div>
      <Home />
      <Work />
      <About />
    </div>
    </>
  );
};
