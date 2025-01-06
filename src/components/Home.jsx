import React, { useRef } from 'react';
import cookieBiteLight from '../images/cookie-bite-light.svg';
import cookieBiteDark from '../images/cookie-bite-dark.svg';
import paperPlaneLight from '../images/paper-plane-light.svg';
import paperPlaneDark from '../images/paper-plane-dark.svg';
import '../styles/Home.css';

export default function Home() {

    // Reference to work button's image and connect button's image to change their image on mouse hover.
    const workBtnImgRef = useRef(null);
    const connectBtnImgRef = useRef(null);

  return (
    <section className="home flex">
        <div className="homeCard">
            <p className="greeting">Hi! I'm</p>
            <h1 className="myName">Aayush Kumar Kumawat</h1>
            <p className="aboutMeHomeText flex">
                and I
                <span className="flex">
                    <span>am a Frontend Developer!</span> 
                    <span>am a Tech Enthusiast</span> 
                    <span>make cool stuff 🧈</span> 
                    <span>really like minimalism</span> 
                    <span>like lots of sweets 🧁</span>
                </span>
            </p>

            <div className="homeButtons flex">
                <a href="https://github.com/Aayush259" target="_blank" aria-label='My Work'>
                    <button
                        className="gitHubBtn flex"
                        onMouseEnter={() => {workBtnImgRef.current.src = cookieBiteLight}}
                        onMouseLeave={() => {workBtnImgRef.current.src = cookieBiteDark}}
                    >
                        My Work
                        <img ref={workBtnImgRef} src={cookieBiteDark} alt='Checkout my projects' height={20} width={20} />
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/aayush-kumar-kumawat/" target="_blank" aria-label='Connect with me'>
                    <button
                        className="linkedInBtn flex"
                        onMouseEnter={() => {connectBtnImgRef.current.src = paperPlaneLight}}
                        onMouseLeave={() => {connectBtnImgRef.current.src = paperPlaneDark}}
                    >
                        Got a job? Let's talk!
                        <img ref={connectBtnImgRef} src={paperPlaneDark} alt='Connect with me' height={20} width={20} />
                    </button>
                </a>
            </div>

        </div>
    </section>
  );
};
