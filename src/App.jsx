import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About'
import Education from './components/Education/Education';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Update particles colors when theme changes
    if (window.pJSDom && window.pJSDom.length > 0) {
      const pJS = window.pJSDom[0].pJS;
      const particleColor = isDark ? '#888888' : '#000000';
      const lineColor = isDark ? '#888888' : '#000000';
      pJS.particles.color.value = particleColor;
      pJS.particles.line_linked.color = lineColor;
      pJS.fn.particlesRefresh();
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div>
      <NavBar isDark={isDark} onToggle={toggleTheme} />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="work">
        <MyWork />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
};

export default App

