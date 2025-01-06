import React from 'react';
import '../styles/About.css';

export default function About() {

    return (
        <section id="about" className="about flex">
            <h2>About Me:</h2>
            <div className="aboutMeDescription">
                <p>So, you made it this far into my website. Hopefully you find it interesting!</p>

                <p><strong>👨‍💻 Let me introduce myself:</strong> I'm Aayush Kumar Kumawat, a tech enthusiast 💻 and a passionate coder with a strong foundation in JavaScript, TypeScript, React, and Next.js. I love building dynamic, responsive, and user-friendly web applications that deliver seamless experiences.</p>
                <p>I have worked on a variety of projects, including full-stack applications, where I handled everything from frontend design to backend functionality. My focus is always on writing clean, efficient code and continuously improving my skills to tackle new challenges.</p>

                <p>As an introvert, I find joy in quiet moments of creativity and problem-solving, where I can focus deeply on my work. Despite this, I enjoy connecting with like-minded people to share ideas and collaborate on exciting projects. Feel free to explore my work, and don’t hesitate to reach out if you'd like to connect! 🚀</p>

                <div className="flex">
                    <p><strong>Skills:</strong></p>
                    <p>Next.js, JavaScript, TypeScript, React, Node, Express, Tailwind CSS, CSS</p>
                </div>
                
                <div className="flex">
                    <p><strong>Have used:</strong></p>
                    <p>Git, Vue.js, Saas, Nuxt, Postman, MongoDB</p>
                </div>
            </div>
        </section>
    );
};