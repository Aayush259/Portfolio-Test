import React from 'react';
import '../styles/Nav.css';

export default function Nav() {

    return (
        <>
        <nav className="nav flex">
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
