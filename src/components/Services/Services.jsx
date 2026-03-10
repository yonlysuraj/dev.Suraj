import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import ServicesData from "../../assets/services_data";
import { FaEye, FaRobot, FaProjectDiagram, FaCloud, FaLaptopCode, FaChartPie, FaCode } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const icons = [
  { component: FaEye, color: "#61DBFB" },
  { component: FaRobot, color: "#ff6f00" },
  { component: FaProjectDiagram, color: "#FF9900" },
  { component: FaCloud, color: "#00ff00" },
  { component: FaLaptopCode, color: "#00758f" },
  { component: FaChartPie, color: "#ffff" }
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useScrollAnimation(0.1);
  const IconComponent = icons[index]?.component || FaCode;
  
  // Create staggered delay based on index (0.1s, 0.2s, 0.3s...)
  const getDelayClass = () => {
    const delayMap = { 0: 'delay-1', 1: 'delay-2', 2: 'delay-3', 3: 'delay-1', 4: 'delay-2', 5: 'delay-3' };
    return delayMap[index % 6] || '';
  };

  return (
    <div ref={cardRef} className={`services-format scroll-animate ${getDelayClass()}`}>
      <div className="service-header">
        <span className="service-number">{service.s_no}</span>
        <IconComponent size={48} className="service-icon" />
      </div>
      <h2>{service.s_name}</h2>
      <p>{service.s_desc}</p>
    </div>
  );
};

const Services = () => {
  const titleRef = useScrollAnimation();

  return (
    <div id="services" className="services">
      <div ref={titleRef} className="services-title scroll-animate">
        <h1>My Services<span>.</span></h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {ServicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
