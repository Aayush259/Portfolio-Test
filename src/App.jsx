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
