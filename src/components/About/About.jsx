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
                    <p>Hello! I'm Suraj Mallick, a passionate and dedicated Web Developer, specializing in MERN Stack. With a strong foundation in Computer Science, I have honed my skills over 3 years of hands-on experience in my college, bringing a blend of creativity, technical proficiency, and innovative thinking to every project I undertake.</p>
                    <p>My journey in Computer Science began with my love towards video games from my childhood days . Since then, I have had the privilege of working with passion. These experiences have equipped me with a comprehensive understanding of the role of a Computer Science Engineer, allowing me to deliver solutions that are both aesthetically pleasing and functionally robust.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"55%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="achievement">
                <h1>10+</h1>
                <p>Years od Expirience</p>
            </div>
            <hr/>
            <div className="achievement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="achievement">
                <h1>15+</h1>
                <p>Competiton Wins</p>
            </div>
        </div>
    </div>
    
  )
}

export default About
