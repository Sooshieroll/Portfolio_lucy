import React from 'react';
import LinkedIn from './images/LinkedIn.png';
import Github from './images/Github.png';
import '../components/Style/Contact.css';
import Background from '../components/images/Background.png';

function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>Email: imlucywang@gmail.com</p>
            <a href='https://www.linkedin.com/in/lucy-wang1/'><img className='projectLogo' src={LinkedIn} /></a>
            <a href='https://github.com/Sooshieroll'><img className='projectLogo' src={Github} /></a>
        </div>
    )
}

export default Contact;