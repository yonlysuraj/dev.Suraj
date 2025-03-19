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
                    <p>Hello! I'm Suraj Mallick, a passionate and dedicated Web Developer, specializing in MERN Stack. With a strong foundation in Computer Science, I am enthusiastic about creating innovative web solutions and constantly learning new technologies.</p>
                    <p>My journey in Computer Science began with my love towards video games from my childhood days. This passion has driven me to pursue web development, where I can combine creativity with technical skills to build engaging user experiences.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"55%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
