import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GithubUser from './GithubUser';


function About() {
    return (
        <div>
            <h1>Lucy Wang</h1>
            <h2>Full Stack Software Engineer</h2>
            <h2>My current experience is in:</h2>
            <h3 className='skills'>HTML, CSS, JavaScript, react with an understanding of SQL, Postgres, MongoDB and API structures.</h3>
            <br></br>
            <br></br>
            <h3>My background in financial services, specifically the Small Business Administration has developed my ability to be precise and meticulous under pressure. I find that to have benefited me greatly when it comes to writing and debugging my code.
                <br></br>
                <br></br>
                I gain great satisfaction from gaining new knowledge & being able to apply it to help me become a better problem solver in my everyday life.
                <br></br>
                <br></br>
                I seek to be a part of an innovative team providing great ideas and insight with all the knowledge I have learned and will continue to learn.</h3>
            <br></br>
            <a href='/contact'>Connect With Me</a>
            <br></br>
            <a href='/projects'>See My Previous Work</a>
        </div >
    )
}

export default About;