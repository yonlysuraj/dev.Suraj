import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pfp from '../../assets/pfp2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />  
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={pfp} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Suraj Mallick, a passionate and dedicated Web Developer with a strong foundation in Computer Science. My journey into technology has been fueled by curiosity, creativity, and a deep appreciation for logical problem-solving.</p>
                    <p>From an early age, I was fascinated by how technology shapes our world. My love for chess taught me to think strategically, analyze patterns, and anticipate outcomes—skills that naturally translated into my approach to web development. The ability to create something from scratch and see it come to life on the screen is what drives me every day.</p>
                    <p>I find immense joy in building digital experiences that are both functional and user-centric. Whether it's crafting intuitive interfaces or optimizing backend processes, I love the challenge of bringing ideas to reality through code. Beyond that, I'm always eager to learn, experiment with new technologies, and push my boundaries as a developer.</p>
                    <p>When I'm not coding, you'll likely find me engrossed in a game of chess, reading about emerging tech trends, or simply exploring creative ways to solve problems.</p>
                    <p>Let's Connect! I'm always open to new opportunities, collaborations, and thought-provoking discussions. Feel free to reach out—I'd love to connect!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About