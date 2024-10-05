import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const useBackgroundSettings = () => {
  const currentPath = usePathname();

  const [backgroundImage, setBackgroundImage] = useState("/images/idle_bg.png");
  const [backgroundHeight, setBackgroundHeight] = useState("100vh");
  const [backgroundHeightPercentage, setBackgroundHeightPercentage] =
    useState("100%");

  useEffect(() => {
    switch (currentPath) {
      case "/":
        setBackgroundHeight("100vh");
        setBackgroundHeightPercentage("100%");
        break;
      case "/projects":
      case "/shop":
      case "/furniture":
      case "/contactUs":
        setBackgroundImage("/images/background.png");
        setBackgroundHeight("50vh");
        setBackgroundHeightPercentage("100%");
        break;
    }
  }, [currentPath]);

  return {
    backgroundImage,
    backgroundHeight,
    backgroundHeightPercentage,
    setBackgroundImage,
  };
};

export default useBackgroundSettings;
