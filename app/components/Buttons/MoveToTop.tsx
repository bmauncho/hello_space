"use client";
import React, { useState, useEffect } from "react";
import { TiArrowUpThick } from "react-icons/ti";

const MoveToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[rgba(190,124,62,1)] rounded-full h-12 w-12 flex items-center justify-center text-white shadow-lg hover:bg-[rgba(160,104,52,1)] transition-all delay-150 hover:scale-110"
        >
          <TiArrowUpThick className="text-white text-2xl" />
        </button>
      )}
    </div>
  );
};

export default MoveToTop;
