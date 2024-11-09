import { useEffect, useState } from "react";
import { handleTG } from "../../../features/handleTG/handleTG";

const useHeaderLogic = () => {
  const [navBar, setNavBar] = useState(false);

  const scrollHeader = (height: number) => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
    setNavBar(false);
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const isScreen = window.screen.width;

  type TScrollingParams = {
    [key: string]: number;
  };
  const scrollingToParams: TScrollingParams[] = [
    { id: 480, headerCommunity: 900, headerLern: 2620, headerRoadMap: 3630 },
    { id: 769, headerCommunity: 1100, headerLern: 3340, headerRoadMap: 4400 },
    { id: 1024, headerCommunity: 1050, headerLern: 2485, headerRoadMap: 3180 },
    { id: 1441, headerCommunity: 1820, headerLern: 4350, headerRoadMap: 5600 },
    { id: 1920!, headerCommunity: 1200, headerLern: 1200, headerRoadMap: 1200 },
  ];

  const funcScrollingTo = (isScreening: number) => {
    let index = 0;
    if (isScreening < 481) {
      index = 0;
    } else if (isScreening < 770) {
      index = 1;
    } else if (isScreening < 1025) {
      index = 2;
    } else if (isScreening < 1441) {
      index = 3;
    } else {
      index = 4;
    }

    return (titleKey: string) => {
      return scrollingToParams[index][titleKey as keyof TScrollingParams] || 0;
    };
  };

  const getSrollingTo = funcScrollingTo(isScreen);

  const buttonParamScroll = [
    {
      id: 1,
      titleKey: "headerCommunity",
      scrollingTo: getSrollingTo("headerCommunity"),
    },
    { id: 2, titleKey: "headerLern", scrollingTo: getSrollingTo("headerLern") },
    {
      id: 3,
      titleKey: "headerRoadMap",
      scrollingTo: getSrollingTo("headerRoadMap"),
    },
    { id: 4, titleKey: "headerSupport", onClick: handleTG },
  ];

  return { navBar, setNavBar, scrollHeader, isDesktop, buttonParamScroll };
};

export default useHeaderLogic
