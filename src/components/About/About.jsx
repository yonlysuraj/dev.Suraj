import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pfp from '../../assets/profile_img.svg'
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
                    <p>Loda epsilum </p>
                    <p>loda mar ke marunga</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML $CSS</p></div><hr style={{width:"50%"}}/>
                    <div className="about-skill"><p>React</p></div><hr style={{width:"50%"}}/>
                    <div className="about-skill"><p>JavaScript</p></div><hr style={{width:"50%"}}/>
                    <div className="about-skill"><p>Next JS</p></div><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
        <div className="about-achievement">
            <div className="achievement">
                <h1>10+</h1>
                <p>Years od Expirience</p>
            </div>
            <div className="achievement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
        </div>
    </div>
    
  )
}

export default About
