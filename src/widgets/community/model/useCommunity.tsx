import { useEffect, useState } from "react";
import telegram_icon from "/svg/icon_telegram.svg";
import github_icon from "/svg/icon_gitHub.svg";
import twitter_icon from "/svg/icon_twitter.svg";
import useMyTranslate  from "../../../app/translationText/useMyTranslate";
const useCommunity = () => {
    
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 480);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 770);
  const {t} = useMyTranslate()

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
      url: "https://github.com/brokqwiks/UDO_",
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
