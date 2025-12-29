// src/LandingPage.js

// I wanna revise this script to move the video to uppper banner

import React, { useState, useEffect, useRef } from "react";
import "./LandingPage.css";
import backgroundSheet from "./robotics480.mp4";
import playVideo from "./video_audio.mov";
import Modal from "react-modal";
Modal.setAppElement("#root");

const LandingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Ref for the background video (robotics480.mp4)
  const backgroundVideoRef = useRef(null);
  const [isBackgroundAudioPlaying, setIsBackgroundAudioPlaying] =
    useState(true);

  // Ref for the button-controlled audio (video_audio.mov)
  const buttonAudioRef = useRef(null);
  const [isButtonAudioPlaying, setIsButtonAudioPlaying] = useState(false);

  useEffect(() => {
    // Logic for background video audio
    const attemptPlayBackground = async () => {
      if (backgroundVideoRef.current) {
        console.log("Attempting to play background video unmuted...");
        backgroundVideoRef.current.muted = false; // Unmute initially
        try {
          await backgroundVideoRef.current.play();
          console.log("Background video playing unmuted success!");
          setIsBackgroundAudioPlaying(true);
        } catch (error) {
          console.log("Background video autoplay blocked:", error);
          // If blocked, we might need to mute it to play video at least, or wait for interaction
          backgroundVideoRef.current.muted = true;
          try {
            await backgroundVideoRef.current.play();
            console.log("Background video playing muted fallback success.");
          } catch (e) {
            console.log("Even muted play failed", e);
          }
        }
      }
    };

    // Add interaction listener to STOP background audio on first click
    const stopBackgroundAudioOnInteraction = (event) => {
      console.log("Interaction detected:", event.type);
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.muted = true;
        setIsBackgroundAudioPlaying(false);
        console.log("Background video muted due to interaction.");
      }
      // Remove listeners after first interaction
      document.removeEventListener(
        "click",
        stopBackgroundAudioOnInteraction,
        true
      );
      document.removeEventListener(
        "touchstart",
        stopBackgroundAudioOnInteraction,
        true
      );
      document.removeEventListener(
        "keydown",
        stopBackgroundAudioOnInteraction,
        true
      );
      document.removeEventListener(
        "mousedown",
        stopBackgroundAudioOnInteraction,
        true
      );
    };

    attemptPlayBackground();

    // Use capture: true to ensure we catch the event before it's stopped
    document.addEventListener("click", stopBackgroundAudioOnInteraction, true);
    document.addEventListener(
      "touchstart",
      stopBackgroundAudioOnInteraction,
      true
    );
    document.addEventListener(
      "keydown",
      stopBackgroundAudioOnInteraction,
      true
    );
    document.addEventListener(
      "mousedown",
      stopBackgroundAudioOnInteraction,
      true
    );

    return () => {
      document.removeEventListener(
        "click",
        stopBackgroundAudioOnInteraction,
        true
      );
      document.removeEventListener(
        "touchstart",
        stopBackgroundAudioOnInteraction,
        true
      );
      document.removeEventListener(
        "keydown",
        stopBackgroundAudioOnInteraction,
        true
      );
      document.removeEventListener(
        "mousedown",
        stopBackgroundAudioOnInteraction,
        true
      );
    };
  }, []);

  const toggleButtonAudio = () => {
    if (buttonAudioRef.current) {
      if (isButtonAudioPlaying) {
        buttonAudioRef.current.pause();
      } else {
        buttonAudioRef.current
          .play()
          .catch((e) => console.error("Button audio play failed:", e));
      }
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <div className="video-container">
        <div className="video-background">
          <video ref={backgroundVideoRef} loop playsInline muted={false}>
            {/* <source src="robotics480.mp4" type="video/mp4" /> */}
            <source src={backgroundSheet} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="content-overlay">
        <div className="container">
          <header>
            <div className="header-top">
              <button className="audio-control-btn" onClick={toggleButtonAudio}>
                {isButtonAudioPlaying ? (
                  <i className="fas fa-volume-up"></i>
                ) : (
                  <i className="fas fa-volume-mute"></i>
                )}
                {isButtonAudioPlaying ? " 暫停音樂" : " 播放音樂"}
              </button>
            </div>
            <h2>社會機器人會社</h2>
            <h1>
              <p>AI Autonoumous & Automation Agency</p>
            </h1>
            {/* Audio Element - controlled by button only */}
            <video
              ref={buttonAudioRef}
              style={{ display: "none" }}
              onEnded={() => setIsButtonAudioPlaying(false)}
              onPlay={() => setIsButtonAudioPlaying(true)}
              onPause={() => setIsButtonAudioPlaying(false)}
            >
              <source src={playVideo} type="video/quicktime" />
              <source src={playVideo} type="video/mp4" />
            </video>
          </header>
          <main>
            <div className="category-grid">
              <div className="category-item">
                <i className="fas fa-print"></i>
                <p>Agents</p>
              </div>
              <div className="category-item">
                <i className="fas fa-desktop"></i>
                <p>AI services</p>
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
                {/* <!-- Messenger Chat Plugin Code --> 
                <div id="fb-root"></div>
                 <div id="fb-customer-chat" class="fb-customerchat"></div> 
                 <script> var chatbox = document.getElementById('fb-customer-chat'); 
                  chatbox.setAttribute("page_id", "PAGE-ID"); 
                  chatbox.setAttribute("attribution", "biz_inbox"); 
                  </script> 
                  <script>
                     window.fbAsyncInit = function() { FB.init({ xfbml : true, version : 'API-VERSION' }); }; 
                     (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; 
                     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'; 
                     fjs.parentNode.insertBefore(js, fjs); }
                     (document, 'script', 'facebook-jssdk')); </script>  */}
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
