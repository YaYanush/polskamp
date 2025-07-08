import React from "react";
import "./Video.css";

const Film = ({ videoSrc }) => {
  return (
    <div className="video-background-container">
        <video
          className="background-video"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      <div className="video-overlay" />
    </div>
  );
};

export default Film;
