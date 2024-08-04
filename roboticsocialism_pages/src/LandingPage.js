// src/LandingPage.js
        
  
// I wanna revise this script to move the video to uppper banner


import React from 'react';
import './LandingPage.css';
import backgroundSheet from "./robotics480.mp4";


const LandingPage = () => {

  return (
    <div>
      <div className='video-container'>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          {/* <source src="robotics480.mp4" type="video/mp4" /> */}
        <source src={backgroundSheet} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
      <div className="content-overlay">
        <div className="container">
          <header>
            <h1>社會機器人會社</h1>
            <p>AI Autonoumous & Automation Agency</p>
            <p>在此為您服務!!!!!</p>
          </header>
          <main>
            <div className="category-grid">
              <div className="category-item">
                <i className="fas fa-print"></i>
                <p>Agents</p>
              </div>
              <div className="category-item">
                <i className="fas fa-desktop"></i>
                <p>人工智能</p>
              </div>
              <div className="category-item">
                <i className="fas fa-headphones"></i>
                <p>機器人力資源</p>
              </div>
              <div className="category-item">
                <i className="fas fa-cloud-upload-alt"></i>
                <p>社會主義</p>
              </div>
              <div className="category-item">
                <i className="fas fa-microchip"></i>
                <p>具身智能</p>
              </div>
              <div className="category-item">
                <i className="fas fa-mouse"></i>
                <p>問吧!</p>
              </div>
            </div>
          </main>
          <footer>
            {/* <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            </div> */}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
