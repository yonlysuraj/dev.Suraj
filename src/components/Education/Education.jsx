import React from 'react'
import './Education.css'
import siliconUni from '../../assets/silicon-uni.jpg'
import davSchool from '../../assets/dav-school.jpg'

const Education = () => {
  return (
    <div className='education'>
      <div className="education-title">
        <h1>My Education<span>.</span></h1> 
      </div>

      <div className="education-timeline">
        <div className="timeline-item">
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

        <div className="timeline-item">
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
