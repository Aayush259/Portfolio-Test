import React from 'react';
import dictionaryProjectImage from '../images/dictionary-project.webp';
import ipAddressProjectImage from '../images/ip-address-tracker-project.webp';
import clockProjectImage from '../images/clock-project.webp';
import squareProjectImage from '../images/square-project.webp';
import soundSphereProjectImage from '../images/sound-sphere-project.webp';
import '../styles/Work.css';
import WorkCard from './WorkCard.jsx';

export default function Work() {

    // Array of all projects.
    const projects = [
        {
            projectTitle: 'Square',
            projectDescription: 'A real-time chat application which allows users to connect, chat, and manage profiles with seamless updates and an intuitive user interface.',
            projectImage: squareProjectImage,
            projectImageAltText: 'Square',
            technologiesUsed: ['Next JS', 'TypeScript', 'Tailwind CSS', 'Socket.io', 'MongoDB', 'JWT', 'Redux Toolkit'],
            gitHubLink: 'https://github.com/Aayush259/square',
            liveURL: 'https://square-vl8y.onrender.com/',
            style: {
                'backgroundColor': 'rgba(211, 195, 231, 0.616)',
                'borderColor': 'rgba(211, 195, 231, 0.316)'
            }
        },
        {
            projectTitle: 'Sound Sphere',
            projectDescription: 'A full-stack e-commerce application that provides a seamless, interactive experience for browsing and purchasing audio products.',
            projectImage: soundSphereProjectImage,
            projectImageAltText: 'Sound Sphere',
            technologiesUsed: ['Vite', 'Node JS', 'Express', 'MongoDB', 'JWT', 'Redux Toolkit', 'Tailwind CSS'],
            gitHubLink: 'https://github.com/Aayush259/E-Commerce',
            liveURL: 'https://aayush259.github.io/E-Commerce/',
            style: {
                'backgroundColor': 'rgba(161, 230, 176, 0.616)',
                'borderColor': 'rgba(161, 230, 176, 0.316)',
            }
        },
        {
            projectTitle: 'Dictionary',
            projectDescription: 'Help users look up words, view their definitions, phonetics, and example sentences with theme toggling and history tracking features.',
            projectImage: dictionaryProjectImage,
            projectImageAltText: 'Dictionary Project',
            technologiesUsed: ['React', 'Local Storage', 'React Router Dom', 'Context API', 'Rest API'],
            gitHubLink: 'https://github.com/Aayush259/Dictionary',
            liveURL: 'https://aayush259.github.io/Dictionary/',
            style: {
                'backgroundColor': 'rgba(195, 221, 231, 0.616)',
                'borderColor': 'rgba(195, 221, 231, 0.316)'
            }
        },
        {
            projectTitle: 'IP Address Tracker',
            projectDescription: 'Allows users to search for any IP address or domain and displays information such as the IP address, location, timezone, and ISP. The application also displays the location on a map.',
            projectImage: ipAddressProjectImage,
            projectImageAltText: 'IP Address Project',
            technologiesUsed: ['React', 'React Router Dom', 'Context API', 'Leaflet JS Map'],
            gitHubLink: 'https://github.com/Aayush259/IP-Address-Tracker',
            liveURL: 'https://aayush259.github.io/IP-Address-Tracker/',
            style: {
                'backgroundColor': 'rgba(0, 198, 224, 0.616)',
                'borderColor': 'rgba(0, 198, 224, 0.316)'
            }
        },
        {
            projectTitle: 'Clock',
            projectDescription: 'Displays the current time, provides a stopwatch feature, and allows users to set countdown timers.',
            projectImage: clockProjectImage,
            projectImageAltText: 'Clock Project',
            technologiesUsed: ['Vanilla JS', 'JS Date Object', 'HTML5', 'CSS3'],
            gitHubLink: 'https://github.com/Aayush259/Clock',
            liveURL: 'https://aayush259.github.io/Clock/',
            style: {
                'backgroundColor': 'rgba(161, 230, 176, 0.616)',
                'borderColor': 'rgba(161, 230, 176, 0.316)',
            }
        },
    ];

    return (
        <section id="work" className="work flex">
            <h2 className='head2'>Work showcase:</h2>
            <div className="myWork flex">
                {
                    projects.map((project) => <WorkCard key={project["projectTitle"]} projectDetails={project} />)
                }
            </div>
        </section>
    );
};
