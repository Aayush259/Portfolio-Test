import React from 'react';
import dictionaryProjectImage from '../images/dictionary-project.jpg';
import ipAddressProjectImage from '../images/ip-address-tracker-project.jpeg';
import calculatorProjectImage from '../images/calculator-project.jpeg';
import clockProjectImage from '../images/clock-project.jpg';
import '../styles/Work.css';
import WorkCard from './WorkCard.jsx';

export default function Work() {

    const ipAddressProject = {
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
    };

    const whereInTheWorldProject = {
        projectTitle: 'Where in the World',
        projectDescription: 'Allows users to explore information about countries around the world and features dynamic theming, infinite scrolling, and advanced filtering capabilities.',
        projectImage: 'https://aayush259.github.io/Aayush-Kumar-Kumawat/images/project-where-in-the-world.png',
        projectImageAltText: 'Where in the World Project',
        technologiesUsed: ['React', 'React Router DOM', 'Rest Counties API', 'Context API', 'React Lazy Loading'],
        gitHubLink: 'https://github.com/Aayush259/Where-in-the-world',
        liveURL: 'https://aayush259.github.io/Where-in-the-world/',
        style: {
            'backgroundColor': 'rgba(221, 102, 211, 0.616)',
            'borderColor': 'rgba(221, 102, 211, 0.316)'
        }
    };

    const dictionaryProject = {
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
    };

    const clockProject = {
        projectTitle: 'Clock',
        projectDescription: 'Displays the current time, provides a stopwatch feature, and allows users to set countdown timers.',
        projectImage: clockProjectImage,
        projectImageAltText: 'Clock Project',
        technologiesUsed: ['Vanilla JS', 'JS Date Object', 'HTML5', 'CSS3'],
        gitHubLink: 'https://github.com/Aayush259/Clock',
        liveURL: 'https://aayush259.github.io/Clock/',
        style: {
            'backgroundColor': 'rgba(211, 195, 231, 0.616)',
            'borderColor': 'rgba(211, 195, 231, 0.316)'
        }
    };

    const calculatorProject = {
        projectTitle: 'Calculator',
        projectDescription: 'Perform basic arithmetic operations - Addition, Subtraction, Multiplication, and Division, and also provides three themes',
        projectImage: calculatorProjectImage,
        projectImageAltText: 'Calculator Project',
        technologiesUsed: ['Vanilla JS', 'JS Math Object', 'HTML5', 'CSS3'],
        gitHubLink: 'https://github.com/Aayush259/Calculator-Challenge',
        liveURL: 'https://aayush259.github.io/Calculator-Challenge/',
        style: {
            'backgroundColor': 'rgba(161, 230, 176, 0.616)',
            'borderColor': 'rgba(161, 230, 176, 0.316)',
        }
    };

    // Array of all projects.
    const projects = [dictionaryProject, ipAddressProject, clockProject, calculatorProject, whereInTheWorldProject];

    return (
        <section id="work" className="work flex">
            <h2>Work showcase:</h2>
            <div className="myWork flex">
                {
                    projects.map((project) => <WorkCard key={project["projectTitle"]} projectDetails={project} />)
                }
            </div>
        </section>
    );
};