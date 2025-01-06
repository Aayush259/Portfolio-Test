import React from 'react';
import PropTypes from 'prop-types';
import darkThemeIcon from '../images/moon.svg';
import whiteThemeIcon from '../images/icon-sun.svg';
import '../styles/Nav.css';

export default function Nav({ theme, setTheme }) {

    // Setting theme icon according to present theme.
    const themeIcon = theme === 'light' ? darkThemeIcon : whiteThemeIcon;

    return (
        <>
            <nav className="nav flex">
                <button className="toggleThemeBtn" onClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')} aria-label='Change Theme'>
                    <img src={themeIcon} alt="ChangeTheme" height={20} width={20} />
                </button>
                <div className="navLink">
                    <a href="#work" aria-label='Work'>Work</a>
                </div>
                <div className="navLink">
                    <a href="#about" aria-label='About'>About</a>
                </div>
                <div className="navLink">
                    <a href="#contact" aria-label='Connect'>Contact</a>
                </div>
            </nav>
        </>
    );
};


Nav.propTypes = {
    theme: PropTypes.string.isRequired,
    setTheme: PropTypes.func.isRequired,
};
