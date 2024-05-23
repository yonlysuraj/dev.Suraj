import React from 'react'
import './Hero.css'
import pfp from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={pfp} alt="" />
      <h1><span>Hey! I'm Suraj Mallick,</span><br/>a Full Stack Developer</h1>
      <p>Im a Full stack Developer in Odisha, I have skills that might hep you to grow your company</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
