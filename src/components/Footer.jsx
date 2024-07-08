import React from 'react';
import linkedInImage from '../images/linkedin-logo.png';
import gitHubImage from '../images/github-light.png';
import xImage from '../images/x-twitter-light.svg';
import '../styles/Footer.css';
import FooterLinks from './FooterLinks.jsx';

export default function Footer() {

    const link1 = {
        title: 'GitHub - Aayush259',
        href: 'https://github.com/Aayush259',
        imageSrc: gitHubImage,
        imageAlt: 'GitHub'
    };

    const link2 = {
        title: 'LinkedIn - Aayush Kumar Kumawat',
        href: 'https://www.linkedin.com/in/aayush-kumar-kumawat/',
        imageSrc: linkedInImage,
        imageAlt: 'LinkedIn'
    };

    const link3 = {
        title: 'X/Twitter - @Aayush259_',
        href: 'https://x.com/Aayush259_',
        imageSrc: xImage,
        imageAlt: 'X/Twitter'
    };

    // Array of all links detail.
    const linksArray = [link1, link2, link3];

    return (
        <footer className="footer flex">
            {
                linksArray.map((link) => <FooterLinks key={link["title"]} linkDetails={link} />)
            }
        </footer>
    );
};
