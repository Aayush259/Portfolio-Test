import React from 'react';
import '../styles/About.css';

export default function About() {

    return (
        <section id="about" className="about flex">
            <h2>About Me:</h2>
            <div className="aboutMeDescription">
                <p>So, you made it this far into my website. Hopefully you find it interesting!</p>

                <p><strong>👨‍💻 Let me introduce myself:</strong> I'm Aayush Kumar Kumawat, a tech enthusiast 💻 and a passionate coder with strong foundation in JavaScript and React. I have a knack for creating dynamic and responsive web applications that provide excellent user experiences.</p>
                <p>I am currently pursuing my bachelor's degree at University Maharaja College 👑, Jaipur, where I am in my first year. This combination of formal education and independent learning has equipped me with a solid foundation in web development, and I am continuously striving to enhance my skills and build dynamic, responsive web applications.</p>

                <p>I stand as a paragon of a fervent enthusiast of the scientific realm. My educational
                journey echoes my unwavering commitment and passion for knowledge. I showcase an unparalled
                intellectual prowess and unwavering dedication to his studies. My affinity for science and technology
                not only defines his academic trajectory but also serves as the cornerrstone of his character. Innnate humility and kind demeanor, blended with practical and logical thinking, from the foundation for
                my adeptness in crafting intricate programming solutions. Despite his exceptional intelligence, he
                finds solace in soltitude, embracing my introverted and shy nature, often opting for seclusion over
                social interactions. Yet, within the confines of my inner world, I meticulously orchestrates the
                amalgamation of his inherent brilliance with tireless diligence, exemplifying a rare gift to synchronize
                intellect with unwavering persistence. I embody the epitome of a dedicated scholar and a quietly
                tenacious problem solver, harmonizing intellectual acumen with a profound dedication to his craft.</p>

                <div className="flex">
                    <p><strong>Skills:</strong></p>
                    <p>React, JavaScript, HTML, CSS</p>
                </div>
                
                <div className="flex">
                    <p><strong>Have used:</strong></p>
                    <p>Git, Leaflet JS, Rest APIs, </p>
                </div>
            </div>
        </section>
    );
};