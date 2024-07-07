import React from 'react';
import '../styles/Contact.css';

export default function Contact() {

    return (
        <section className="contact flex">
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