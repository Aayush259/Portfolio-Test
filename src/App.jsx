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

  // Changing the height and width of floating div icons on mouseover and mouseout.
  useEffect(() => {
    // Getting all floating icons
    const floatingIcons = document.querySelectorAll('.floatingIcon');

    // This function handles the mouseover event and increase the icon's size and change the animation direction by reversing it.
    const handleMouseOver = (event) => {
      floatingIcons.forEach(icon => {
        icon.style.animationPlayState = 'paused';
        // Again play the animation after 200 milliseconds.
        setTimeout(() => {
          icon.style.animationPlayState = 'running';
        }, 200);
        icon.style.width = '40px';
        icon.style.height = '40px';
        icon.style.animationDirection = 'reverse';
      });

      event.currentTarget.style.width = '55px';
      event.currentTarget.style.height = '55px';
    };

    // This function handles the mouseover event and decrease the icon's size.
    const handleMouseOut = () => {
      floatingIcons.forEach(icon => {
        // icon.style.animationPlayState = 'running';
        icon.style.width = '35px';
        icon.style.height = '35px';
      });
    };

    // Adding mouseover and mouseout event listeners to handle animation.
    floatingIcons.forEach(icon => {
      icon.addEventListener('mouseover', handleMouseOver);
      icon.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup function.
    return () => {
      floatingIcons.forEach(icon => {
        icon.removeEventListener('mouseover', handleMouseOver);
        icon.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

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
