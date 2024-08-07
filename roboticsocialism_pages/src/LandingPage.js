// src/LandingPage.js
        
  
// I wanna revise this script to move the video to uppper banner


import React, { useState }  from 'react';
import './LandingPage.css';
import backgroundSheet from "./robotics480.mp4";
import playVideo from "./video&audio.mp4"
import Modal from 'react-modal';
Modal.setAppElement('#root');


const LandingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
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
            <h2>社會機器人會社</h2>
            <h1><p>AI Autonoumous & Automation Agency</p></h1>
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
              <div className="category-item" onClick={openModal}>
                <i className="fas fa-cloud-upload-alt"></i>
              {/* <button onClick={openModal}>Play Video</button> */}

              <p>UBI</p>
              </div>
              <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Video Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                  >
                    <button onClick={closeModal}>Close</button>
                    <video width="100%" controls autoPlay>
                      <source src={playVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Modal>
              <div className="category-item">
                <i className="fas fa-microchip"></i>
                <p>具身</p>
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
