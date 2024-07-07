import React, { useCallback, useEffect, useState } from 'react';
import './styles/App.css';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  // Initializing theme with light.
  const [theme, setTheme] = useState('light');

  // Update the theme by changing the body class.
  const changeTheme = useCallback(() => {
    theme === 'light' ? document.body.classList.remove('dark') : document.body.classList.remove('light');

    document.body.classList.add(theme);
  }, [theme]);

  // Call the changeTheme function when theme state is changed.
  useEffect(changeTheme, [theme]);

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
        <Nav theme={theme} setTheme={setTheme} />
        <Home />
        <Work />
        <About />
        <Contact theme={theme} />
        <Footer />
      </div>
    </div>
    </>
  );
};
