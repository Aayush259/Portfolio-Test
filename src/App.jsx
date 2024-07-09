import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import './styles/App.css';
import Loader from './components/Loader.jsx';
const Home = lazy(() => import('./components/Home.jsx'));
const Work = lazy(() => import('./components/Work.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Nav = lazy(() => import('./components/Nav.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

export default function App() {

  // Getting theme from local storage if exists, otherwise initialize it with light theme.
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Update the theme by changing the body class and store the changed theme in local storage.
  const changeTheme = useCallback(() => {
    theme === 'light' ? document.body.classList.remove('dark') : document.body.classList.remove('light');

    localStorage.setItem('theme', theme);
    document.body.classList.add(theme);
  }, [theme]);

  // Call the changeTheme function when theme state is changed.
  useEffect(changeTheme, [theme]);

  // This function handles the mouse enter event and increase the icon's size and change the animation direction by reversing it.
  const handleMouseOver = (event) => {
    // Getting all floating icons
    const floatingIcons = document.querySelectorAll('.floatingIcon');

    floatingIcons.forEach(icon => {
      icon.style.animationPlayState = 'paused';
      icon.style.animationDirection = 'reverse';

      // Again play the animation after 300 milliseconds.
      setTimeout(() => {
        icon.style.animationPlayState = 'running';
      }, 300);
      icon.querySelector('.icon').style.width = '40px';
      icon.querySelector('.icon').style.height = '40px';
    });

    event.currentTarget.querySelector('.icon').style.width = '55px';
    event.currentTarget.querySelector('.icon').style.height = '55px';
  };
  
  // This function handles the mouse leave event and decrease the icon's size.
  const handleMouseOut = () => {
    // Getting all floating icons
    const floatingIcons = document.querySelectorAll('.floatingIcon');

    floatingIcons.forEach(icon => {
      icon.style.animationPlayState = 'paused';
      icon.style.animationDirection = 'normal';
      
      // Again play the animation after 300 milliseconds.
      setTimeout(() => {
        icon.style.animationPlayState = 'running';
      }, 300);
      icon.querySelector('.icon').style.width = '35px';
      icon.querySelector('.icon').style.height = '35px';
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>
        <div className="floatingIcon flex" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="icon"></div>
        </div>

        <div className="app">
          <Suspense fallback={<Loader />}>
            <Nav theme={theme} setTheme={setTheme} />
            <Home />
            <Work />
            <About />
            <Contact theme={theme} />
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};
