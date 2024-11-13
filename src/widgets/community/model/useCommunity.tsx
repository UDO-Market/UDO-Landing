import { useEffect, useState } from "react";
import telegram_icon from "/icons/icon_telegram.webp";
import github_icon from "/icons/icon_gitHub.webp";
import twitter_icon from "/icons/icon_twitter.webp";
import useMyTranslate  from "../../../app/translationText/useMyTranslate";

const useCommunity = () => {
    
  const {t} = useMyTranslate()
  
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 480);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 770);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth >= 480);
    const handleTabletResize = () => setIsTablet(window.innerWidth >= 770);
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleTabletResize);

    return () => {window.removeEventListener("resize", handleResize)
      window.removeEventListener("resize", handleTabletResize)
    };
  });

  const communityData = [
    {
      id: 1,
      icon: telegram_icon,
      name: "Telegram",
      descr: t("sectionCardTGDesc"),
      aboutBtn: t("sectionCardButtonSubscribe"),
      url: "https://t.me/udo_ton",
    },
    {
      id: 2,
      icon: github_icon,
      name: "GitHub",
      descr: t("sectionCardGitHubDesc"),
      aboutBtn: t("sectionCardButtonLearnCode"),
      url: "https://github.com/UDO-Market/UDO-Landing",
    },
    {
      id: 3,
      icon: twitter_icon,
      name: "Twitter",
      descr: t("sectionCardTwitterDesc"),
      aboutBtn: t("sectionCardButtonSubscribe"),
      url: "https://x.com/udomarket?s=21",
    },
  ];

  return { isTablet, isMobile, communityData };
};

export default useCommunity
