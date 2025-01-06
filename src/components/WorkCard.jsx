import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import linkDark from '../images/link-dark.svg';
import linkLight from '../images/link-light.svg';
import gitHubDark from '../images/github-dark.svg';
import gitHubLight from '../images/github-light.png';

export default function WorkCard({ projectDetails }) {

    // Getting project information from projectDetails prop object.
    const projectTitle = projectDetails['projectTitle'];
    const projectDescription = projectDetails['projectDescription'];
    const projectImage = projectDetails['projectImage'];
    const projectImageAltText = projectDetails['projectImageAltText'];
    const technologiesUsed = projectDetails['technologiesUsed'];
    const gitHubLink = projectDetails['gitHubLink'];
    const liveURL = projectDetails['liveURL'];
    const backgroundColor = projectDetails['style'];

    // Reference to source code button's and live URL button's image to change their image on mouse hover.
    const sourceCodeBtnImgRef = useRef(null);
    const liveUrlBtnImgRef = useRef(null);

    return (
        <div className="workCard" style={backgroundColor}>
            <img className="projectImage" src={projectImage} alt={projectImageAltText} width={300} height={200} loading='lazy' />

            <div className="technologyUsedContainer flex">
                {
                    technologiesUsed.map((technology) => <div className="technologyUsedBlock" key={technology} style={backgroundColor}>
                        {technology}
                    </div>)
                }
            </div>

            <div className="aboutProject" style={backgroundColor}>
                <h3 className="projectTitle">{projectTitle}</h3>
                <p className="projectDescription">{projectDescription}</p>
                <div className="workButtonContainer flex">
                    <a href={gitHubLink} aria-label={`${projectTitle} source code`}>
                        <button
                            className="sourceCodeBtn flex"
                            onMouseEnter={() => {sourceCodeBtnImgRef.current.src = gitHubLight}}
                            onMouseLeave={() => {sourceCodeBtnImgRef.current.src = gitHubDark}}
                            aria-label='Source Code'
                        >
                            <img ref={sourceCodeBtnImgRef} src={gitHubDark} width={20} height={20} alt='Github' loading='lazy' />
                            Source Code
                        </button>
                    </a>
                    <a href={liveURL} aria-label={`${projectTitle} live URL`}>
                        <button
                            className="liveUrlBtn flex"
                            onMouseEnter={() => {liveUrlBtnImgRef.current.src = linkLight}}
                            onMouseLeave={() => {liveUrlBtnImgRef.current.src = linkDark}}
                            aria-label='Live URL'
                        >
                            <img ref={liveUrlBtnImgRef} src={linkDark} width={20} height={20} alt='Live URL' loading='lazy' />
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};

WorkCard.propTypes = {
    projectDetails: PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        projectDescription: PropTypes.string.isRequired,
        projectImage: PropTypes.string.isRequired,
        projectImageAltText: PropTypes.string.isRequired,
        technologiesUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
        gitHubLink: PropTypes.string.isRequired,
        liveURL: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
    }).isRequired,
};
