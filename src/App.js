import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import './App.css';
import './pages/Home.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-brand"><span className="navbar-initials">DS</span></div>
        <button className={`navbar-hamburger${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Home</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Projects</NavLink></li>
          <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Skills</NavLink></li>
          <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Experience</NavLink></li>
          <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Education</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
