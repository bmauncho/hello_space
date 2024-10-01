"use client";
import React, { useState } from "react";
interface BackgroundProps {
  children: React.ReactNode;
}
const Background: React.FC<BackgroundProps> = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState("/images/idle_bg.png");
  return (
    <div
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        transition: "background-image 0.5s ease, opacity 0.5s ease",
        opacity: 1,
      }}
      onMouseEnter={() => setBackgroundImage("/images/background.png")}
      onMouseLeave={() => setBackgroundImage("/images/idle_bg.png")}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // adjust the overlay color and opacity
          zIndex: 1, // ensure the overlay is on top of the background image
        }}
      ></div>
      {children} {/* Add the children prop here */}
    </div>
  );
};

export default Background;
