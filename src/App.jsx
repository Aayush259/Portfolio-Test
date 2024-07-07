import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Nav from './components/Nav';

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
      <div className="app">
        <Nav />
        <Home />
        <Work />
        <About />
      </div>
    </div>
    </>
  );
};
