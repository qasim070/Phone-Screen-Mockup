import React, { useState } from "react";
import { FaArrowLeft, FaVolumeUp, FaMicrophone, FaPhone } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [isMicActive, setIsMicActive] = useState(false);
  const toggleMic = () => {
    setIsMicActive(!isMicActive);
  };
  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="back-button">
          <FaArrowLeft />
        </button>
        <div className="profile-icon">A</div>
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="message-col">
            <div className="avatar">A</div>
            <span className="name">Alex Cooper</span>
          </div>
          <div className="message-content">
            <p>Hello! My name is Alex, what's your name?</p>
          </div>
          <button className="audio-icon">
            <FaVolumeUp />
          </button>
        </div>

        {/* Repeat the other messages similarly */}
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="message-col">
            <div className="avatar">A</div>
            <span className="name">Alex Cooper</span>
          </div>
          <div className="message-content">
            <p>Hello! My name is Alex, what's your name?</p>
          </div>
          <button className="audio-icon">
            <FaVolumeUp />
          </button>
        </div>

        {/* Repeat the other messages similarly */}
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="message-col">
            <div className="avatar">A</div>
            <span className="name">Alex Cooper</span>
          </div>
          <div className="message-content">
            <p>Hello! My name is Alex, what's your name?</p>
          </div>
          <button className="audio-icon">
            <FaVolumeUp />
          </button>
        </div>

        {/* Repeat the other messages similarly */}
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="message-col">
            <div className="avatar">A</div>
            <span className="name">Alex Cooper</span>
          </div>
          <div className="message-content">
            <p>Hello! My name is Alex, what's your name?</p>
          </div>
          <button className="audio-icon">
            <FaVolumeUp />
          </button>
        </div>

        {/* Repeat the other messages similarly */}
      </div>
      <div className="chat-footer">
        <p>...Joe is Speaking</p>
        <div className="footer-buttons">
          <button
            className={`mic-button ${isMicActive ? "mic-button-active" : ""}`}
            onClick={toggleMic}
          >
            <FaMicrophone />
          </button>
          <button className="end-call-button">
            <FaPhone />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
