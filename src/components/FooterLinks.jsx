import React from 'react';
import PropTypes from 'prop-types';

export default function FooterLinks({ linkDetails }) {

    // Getting link details from linkDetails prop.
    const title = linkDetails['title'];
    const href = linkDetails['href'];
    const imageSrc = linkDetails['imageSrc'];
    const imageAlt = linkDetails['imageAlt'];

    return (
        <a href={href} className="footerLink flex" aria-label={title}>
            <img src={imageSrc} alt={imageAlt} width={20} />
            <span>{title}</span>
        </a>
    );
};

FooterLinks.propTypes = {
    linkDetails: PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        imageSrc: PropTypes.node.isRequired,
        imageAlt: PropTypes.string.isRequired
    }).isRequired,
};
