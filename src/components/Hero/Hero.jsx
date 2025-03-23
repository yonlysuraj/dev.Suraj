import React from 'react'
import './Hero.css'
import pfp from '../../assets/pfp.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Resume from '../../assets/SurajMallickResume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pfp} alt="" />
      <div className="hero-content">
        <h1>
          <span>Hey! I'm Suraj Mallick,</span><br/>
          a Cloud Engineer
        </h1>
        <TypeAnimation
          sequence={[
            'Im a Cloud Engineer in Odisha, I have skills that might help you to grow your company',
            1000,
            'I build cloud infrastructure',
            1000,
            'I create scalable solutions',
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
          <a 
            href={Resume} 
            download="SurajMallick_Resume.pdf"
            className="hero-resume"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
          >
            My resume
          </a>
        </div>
        <div className="hero-social">
          <a href="https://x.com/y_onlysuraj" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/suraj-mallick-ez/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/yonlysuraj" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/itzsurazzz/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://discord.com/users/surajuwu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
