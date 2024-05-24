import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pfp from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div className='about'>
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
                    <p>Hello! I'm [Your Name], a passionate and dedicated [Your Profession or Title], specializing in [Your Area of Expertise]. With a strong foundation in [Your Field or Industry], I have honed my skills over [X] years of hands-on experience, bringing a blend of creativity, technical proficiency, and innovative thinking to every project I undertake.</p>
                    <p>My journey in [Your Field or Industry] began with [a brief mention of how you started, education, or early influences]. Since then, I have had the privilege of working with [mention any notable companies, clients, or projects], where I have contributed to [highlight specific achievements, projects, or roles]. These experiences have equipped me with a comprehensive understanding of [specific skills or tools you are proficient in], allowing me to deliver solutions that are both aesthetically pleasing and functionally robust.</p>
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
