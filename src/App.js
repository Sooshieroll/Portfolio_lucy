import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GithubUser from './components/GithubUser';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  const projects = [
    {
      title: 'Stacker Arcade',
      description: 'Fun and addicting game where you try to continuously stack blocks as closely as possible. It may be challenging but that high score will be something to show off',
      link: 'https://github.com/Sooshieroll/Project-1---LW'
    }, {
      title: 'Flight Search',
      description: 'Easy way to find the cheapest flights for your next adventure!',
      link: 'https://github.com/Sooshieroll/Finder'
    }
  ]
  return (
    <Router>
      <div>
        <Navbar />

      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router >
  );
}

export default App;
