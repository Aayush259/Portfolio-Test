import React, { useEffect, useRef } from 'react';
import '../styles/Contact.css';

export default function Contact() {

    // Reference to contact section.
    const contactSectionRef = useRef(null);

    // Intersection observer to track when contact section is on screen.
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Changed body background and display contact section.
                        document.body.style.backgroundColor = 'rgb(25, 199, 199)';
                        contactSectionRef.current.style.opacity = '1';
                    } else {
                        // Changed body background and hide contact section.
                        document.body.style.backgroundColor = 'transparent';
                        contactSectionRef.current.style.opacity = '0';
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        // If contact section reference is not null, then observe contact section.
        if (contactSectionRef.current) {
            observer.observe(contactSectionRef.current);
        }

        // If this component unmounts, stop observing contact section.
        return () => {
            if (contactSectionRef.current) {
                observer.unobserve(contactSectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={contactSectionRef} id="contact" className="contact flex">
            <h2>Contact Me:</h2>
            <div className="contactForm flex">
                <form className="flex flex">
                    <label htmlFor="name" className="label flex">
                        Your Name:
                        <input id="name" type="text" name="name" required />
                    </label>
                    <label htmlFor="email" className="label flex">
                        Your Email:
                        <input id="email" type="email" name="email" required />
                    </label>
                    <label htmlFor="message" className="label flex">
                        Message:
                        <input id="message" type="text" name="message" required />
                    </label>

                    <button className="sendBtn" type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};