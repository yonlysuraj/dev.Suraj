import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ServicesData from '../../assets/services_data'
import { 
  FaReact, 
  FaCode, 
  FaAws, 
  FaTerminal, 
  FaDatabase, 
  FaGithub 
} from 'react-icons/fa'

const Services = () => {
  const getIcon = (index) => {
    switch(index) {
      case 0: return <FaReact size={48} className="service-icon" />
      case 1: return <FaCode size={48} className="service-icon" />
      case 2: return <FaAws size={48} className="service-icon" />
      case 3: return <FaTerminal size={48} className="service-icon" />
      case 4: return <FaDatabase size={48} className="service-icon" />
      case 5: return <FaGithub size={48} className="service-icon" />
      default: return null
    }
  }

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="No img" />
      </div>
      <div className="services-container">
        {ServicesData.map((service, index) => (
          <div key={index} className="services-format">
            <div className="service-header">
              <span className="service-number">{service.s_no}</span>
              {getIcon(index)}
            </div>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services