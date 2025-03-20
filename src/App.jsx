import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About'
import Education from './components/Education/Education';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
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
