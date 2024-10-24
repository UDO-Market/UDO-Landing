import styles from "./navigation.module.scss";
import { Button } from "../button";
import { TNavigationHeader } from "../../types/TNavigationHeader";
import { Cross } from "../cross/cross";
import icons_language from "/svg/icon_language.svg";
import icons_bar from "/svg/icon_bars.svg";

export const NavigationHeader = ({
  navBar,
  setNavBar,
  scrollHeader,
  t,
  changeLanguages,
  i18n,
}: TNavigationHeader) => {

  return (
    <>
      {window.screen.width > 1025 ? (
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Button onClick={() => scrollHeader(1844)}>
                {t("headerCommunity")}
              </Button>
            </li>
            <li>
              <Button onClick={() => scrollHeader(4582)}>
                {t("headerLern")}
              </Button>
            </li>
            <li>
              <Button onClick={() => scrollHeader(5850)}>
                {t("headerRoadMap")}
              </Button>
            </li>
            <li>
              <Button onClick={() => open("https://t.me/brokqwiks")}>
                {t("headerSupport")}
              </Button>
            </li>
            <li>
              {i18n.language == "ru" ? (
                <Button onClick={() => changeLanguages("en")}>Eng</Button>
              ) : (
                <Button onClick={() => changeLanguages("ru")}>Ru</Button>
              )}
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles.navigationAdaptiv}>
          <ul>
            <li>
              <div className={styles.buttonAdaptiveLang}>
                <Button
                  onClick={() =>
                    i18n.language == "ru"
                      ? changeLanguages("en")
                      : changeLanguages("ru")
                  }
                >
                  <img src={icons_language} alt="icons_language" />
                </Button>
              </div>
            </li>

            <li>
              <Button onClick={() => setNavBar(!navBar)}>
                {!navBar ? (
                  <img src={icons_bar} alt="icons_bar" />
                ) : (
                  <Cross setCross={setNavBar}/>
                )}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
