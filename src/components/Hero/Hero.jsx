import React from 'react'
import './Hero.css'
import pfp from '../../assets/pfp.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pfp} alt="" />
      <div className="hero-content">
        <h1><span>Hey! I'm Suraj Mallick,</span><br/>a Full Stack Developer</h1>
        <p>Im a Full stack Developer in Odisha, I have skills that might hep you to grow your company</p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className='acnchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
          </div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
