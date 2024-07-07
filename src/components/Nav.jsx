import React from 'react';
import '../styles/Nav.css';

export default function Nav() {

    return (
        <>
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
