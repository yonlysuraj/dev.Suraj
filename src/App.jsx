import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About'
import Education from './components/Education/Education';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork/>
      {/* <Education /> */}
    </div>
  )
}

export default App
