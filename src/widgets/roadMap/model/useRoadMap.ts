import { useEffect, useState } from "react";
import roadMap_line from "/icons/roadMap_line.avif";
import roadMap_line_mobilka from "/icons/roadMap_line_mobile.avif";
import roadMap_line_tablet from "/icons/roadMap_line_tablet.avif";
const useRoadMap = () => {
  
  const [isScreen, setIsScreen] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setIsScreen(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const sizeRodmap = () => {
    if (isScreen < 485) {
      return roadMap_line_mobilka;
    } else if (isScreen < 1025) {
      return roadMap_line_tablet;
    } else {
      return roadMap_line;
    }
  };
  return { sizeRodmap };
};

export default useRoadMap
