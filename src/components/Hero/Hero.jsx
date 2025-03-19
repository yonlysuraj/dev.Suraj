import React from 'react'
import './Hero.css'
import pfp from '../../assets/pfp.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pfp} alt="" />
      <div className="hero-content">
        <h1><span>Hey! I'm Suraj Mallick,</span><br/>a Full Stack Developer</h1>
        <TypeAnimation
          sequence={[
            'Im a Full stack Developer in Odisha, I have skills that might help you to grow your company',
            1000,
            'I build responsive web applications',
            1000,
            'I create modern user interfaces',
            1000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '22px', color: '#888', lineHeight: '1.6' }}
        />
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
