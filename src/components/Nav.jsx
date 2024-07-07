import React from 'react';
import '../styles/Nav.css';
import '../styles/Wave.css';

export default function Nav() {

    return (
        <>
        <div className="wave"></div>
        <nav className="nav flex">
            <li className="navLink">
                <a href="#">Work</a>
            </li>
            <li className="navLink">
                <a href="#">About</a>
            </li>
            <li className="navLink">
                <a href="#">Contact</a>
            </li>
        </nav>
        </>
    );
};
