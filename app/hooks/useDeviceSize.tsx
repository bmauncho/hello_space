import { useState, useEffect } from "react";

// Define the breakpoint for small screens
const SMALL_SCREEN_WIDTH = 768; // Adjust this value as needed

const useDeviceSize = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window is only accessed client-side
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN_WIDTH);
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

export default useDeviceSize;
