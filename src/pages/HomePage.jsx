import React from "react";
import { Typography } from "@mui/material";
import { FaChartPie, FaUsers, FaFileInvoice, FaCheckCircle } from "react-icons/fa";
import "../css/homepage.css";
import backImg from "../assets/back.png";

const HomePage = () => {
  const features = [
    {
      icon: <FaUsers size={40} />, 
      title: "Role-Based Access", 
      description: "Ensure secure access with employee, manager, and admin roles.", 
      bgColor: "#E0F2F1", // Light Sea Green
    },
    {
      icon: <FaCheckCircle size={40} />, 
      title: "Automated Approvals", 
      description: "Streamline expense approvals with predefined workflows.", 
      bgColor: "#FFFFFF", // White
    },
    {
      icon: <FaFileInvoice size={40} />, 
      title: "PDF Reporting", 
      description: "Generate and download detailed expense reports in PDF format.", 
      bgColor: "#FFFFFF", // White
    },
    {
      icon: <FaChartPie size={40} />, 
      title: "Real-Time Analytics", 
      description: "Gain deep insights into company expenses with visual reports.", 
      bgColor: "#E0F2F1", // Light Sea Green
    }
  ];

  return (
    <div className="home-container">
      {/* Background Image Section */}
      <div style={{
        background: `url(${backImg}) center/cover no-repeat`,
        backgroundSize: 'center/contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60vh',
      }}></div>
      
      {/* Features Section */}
      <section className="features">
        <Typography variant="h2" className="section-title" fontWeight="bold" color="#325a56">Our Services</Typography>
        <div className="card-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ backgroundColor: feature.bgColor }}>
              <div className="icon-container">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
