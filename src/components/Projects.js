import React from 'react';
import { projects } from './SavedProjects';
import '../components/Style/Projects.css';
import ArcadeStacker from './images/Arcade-Stacker.png'
import FlightFinder from './images/Flight-Finder.png'


function Projects() {
    return (
        <div>
            <br></br>
            <h1 style={{ textTransform: 'uppercase', color: 'grey' }}>Projects</h1>

            <h2>Arcade Stacker</h2>
            <p><strong>Description:</strong> Fun and addicting game where you try to continuously stack blocks as closely as possible. It may be challenging but that high score will be something to show off.</p>
            <img src={ArcadeStacker} alt="" width="300px" height="300px" />
            <br></br>
            <a href="https://sooshieroll.github.io/Project-1---LW/">Try it Out</a>
            <br></br>
            <a href="https://github.com/Sooshieroll/Project-1---LW">Github</a>
            <br></br>
            <br></br>
            <h2>Flight Finder</h2>
            <p><strong>Description:</strong> Easy way to find the cheapest flights for your next adventure!</p>
            <img src={FlightFinder} alt="" width="300x" height="300px" />
            <br></br>
            <a href="https://flight-adventure-finder.herokuapp.com/">Try it Out</a>
            <br></br>
            <a href="https://github.com/Sooshieroll/Finder">Github</a>
        </div >
    )
}

export default Projects;