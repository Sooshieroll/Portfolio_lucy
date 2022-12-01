import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import '../components/Style/Homepage.css';
import GithubUser from './GithubUser';
import LinkedIn from './images/LinkedIn.png';
import Github from './images/Github.png';
import Background from '../components/images/Background.png';

function Homepage() {
    return (
        <div className='background'>
            <br></br>
            <div className='container'>
                <div>
                    <h2>Hey there!</h2>
                </div>
                <h1>I'm Lucy, a full-stack web developer based in Los Angeles, CA</h1>
                <h2>Nice to meet you!</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <a href='https://www.linkedin.com/in/lucy-wang1/'><img className='projectLogo' src={LinkedIn} /></a>
                <a href='https://github.com/Sooshieroll'><img className='projectLogo' src={Github} /></a>
            </div>
        </div>
    )

}

export default Homepage;