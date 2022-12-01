import { ArrowRightIcon } from "heroicons-react";
import { Link } from 'react-router-dom'
import React from "react";
import './Style/Nav.css';

export default function Navbar() {
    return <nav className='nav'>
        <a href='/' className='site-title'>Lucy Wang</a>
        <ul>
            <li>
                <a href='/about'>About Me</a>
            </li>
            <li>
                <a href='/projects'>Projects</a>
            </li>
            <li>
                <a href='/contact'>Contact Me</a>
            </li>
        </ul>

    </nav>
}