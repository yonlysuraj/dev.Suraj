import React from 'react'
import './Education.css'
import siliconUni from '../../assets/silicon-uni.jpg'
import davSchool from '../../assets/dav-school.jpg'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Education = () => {
  const titleRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  return (
    <div className='education' id="education">
      <div ref={titleRef} className="education-title scroll-animate">
        <h1>My Education<span>.</span></h1> 
      </div>

      <div className="education-timeline">
        <div ref={card1Ref} className="timeline-item scroll-animate delay-1">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              <img src={siliconUni} alt="Silicon Institute" />
            </div>
            <div className="timeline-text">
              <h3>B.Tech in Computer Science and Technology</h3>
              <p className="timeline-date">2020 - 2024</p>
              <p className="timeline-details">
                Silicon University, Bhubaneswar<br/>
                CGPA: 7.93
              </p>
            </div>
          </div>
        </div>

        <div ref={card2Ref} className="timeline-item scroll-animate delay-2">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              <img src={davSchool} alt="DAV Public School" />
            </div>
            <div className="timeline-text">
              <h3>Higher Secondary & Secondary Education</h3>
              <p className="timeline-date">2018 - 2020</p>
              <p className="timeline-details">
                DAV Public School, Cuttack<br/>
                12th CBSE: 72.6% (2020)<br/>
                10th CBSE: 89.4% (2018)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
