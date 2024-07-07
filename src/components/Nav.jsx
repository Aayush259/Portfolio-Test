import React from 'react';
import darkThemeIcon from '../images/moon.svg';
import whiteThemeIcon from '../images/icon-sun.svg';
import '../styles/Nav.css';

export default function Nav({ theme, setTheme }) {

    // Setting theme icon according to present theme.
    const themeIcon = theme === 'light' ? darkThemeIcon : whiteThemeIcon;

    return (
        <>
        <nav className="nav flex">
            
            <button className="toggleThemeBtn" onClick={() => setTheme(prevTheme => prevTheme === 'light'? 'dark': 'light')}>
                <img src={themeIcon} alt="ChangeTheme" />
            </button>
            <li className="navLink">
                <a href="#work">Work</a>
            </li>
            <li className="navLink">
                <a href="#about">About</a>
            </li>
            <li className="navLink">
                <a href="#contact">Contact</a>
            </li>
        </nav>
        </>
    );
};
