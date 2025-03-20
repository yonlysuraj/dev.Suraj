import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import ServicesData from "../../assets/services_data";
import { FaReact, FaCode, FaAws, FaTerminal, FaDatabase, FaGithub } from "react-icons/fa";

const icons = [
  { component: FaReact, color: "#61DBFB" },
  { component: FaCode, color: "#ff6f00" },
  { component: FaAws, color: "#FF9900" },
  { component: FaTerminal, color: "#00ff00" },
  { component: FaDatabase, color: "#00758f" },
  { component: FaGithub, color: "#ffff" }
];

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {ServicesData.map((service, index) => {
          const IconComponent = icons[index]?.component || FaCode;
          return (
            <div key={index} className="services-format">
              <div className="service-header">
                <span className="service-number">{service.s_no}</span>
                <IconComponent
                  size={48}
                  className="service-icon"
                />
              </div>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
