import React from 'react';
import linkedInImage from '../images/linkedin-logo.png';
import gitHubImage from '../images/github-light.png';
import xImage from '../images/x-twitter-light.svg';
import '../styles/Footer.css';

export default function Footer() {

    return (
        <footer className="footer flex">
            <a href="https://github.com/Aayush259" className="footerLink flex">
                <img src={gitHubImage} alt="GitHub" width={20} />
                <span>GitHub - Aayush259</span>
            </a>
            <a href="https://www.linkedin.com/feed/" className="footerLink flex">
                <img src={linkedInImage} alt="LinkedIn" width={20} />
                <span>LinkedIn - Aayush Kumar Kumawat</span>
            </a>
            <a href="https://x.com/" className="footerLink flex">
                <img src={xImage} alt="LinkedIn" width={20} />
                <span>X-Twitter - @Aayush259_</span>
            </a>
        </footer>
    );
};