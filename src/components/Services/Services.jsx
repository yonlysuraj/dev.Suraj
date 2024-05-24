import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ServicesData from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Education = () => {
  return (
    <div className='services'>
      <div className="services">
        <div className="services-title">
        <h1>My Education</h1>
        <img src={theme_pattern} alt="No img" />
        </div>
        <div className="services-container">
            {ServicesData.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="service-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Education
