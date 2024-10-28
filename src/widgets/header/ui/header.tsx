import styles from "./header.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { useHeaderLogic } from "../model/useHeaderLogic";
import { Button } from "../../../shared/ui/button";
import { NavigationHeader } from "../../../shared/ui/navigationHeader";
import { NavigationBar } from "../../../shared/ui/navigationBar";
import { Logo } from "../../../shared/ui/logo";
export const Header = () => {
  const { t, i18n, changeLanguages } = useMyTranslate();
  const { navBar, setNavBar, scrollHeader } = useHeaderLogic();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <NavigationHeader
          i18n={i18n}
          t={t}
          navBar={navBar}
          changeLanguages={changeLanguages}
          setNavBar={setNavBar}
          scrollHeader={scrollHeader}
        />
      </div>

      <NavigationBar isOpen={navBar} className={styles.navigationBar}>
        <li>
          <Button
            title="Перейти к блоку коммьюнити"
            textForScreenReaders="Перейти к блоку коммьюнити"
            onClick={() => scrollHeader(860)}
          >
            {t("headerCommunity")} ˃
          </Button>
        </li>
        <li>
          <Button
            title="Перейти к блоку изучить"
            textForScreenReaders="Перейти к блоку изучить"
            onClick={() => scrollHeader(2650)}
          >
            {t("headerLern")} ˃
          </Button>
        </li>
        <li>
          <Button
            title="Перейти к блоку карта проекта"
            textForScreenReaders="Перейти к блоку карта проекта"
            onClick={() =>
              i18n.language === "en" ? scrollHeader(3600) : scrollHeader(3700)
            }
          >
            {t("headerRoadMap")} ˃
          </Button>
        </li>
        <li>
          <Button
            title="Связаться с службой поддержки"
            textForScreenReaders="Связаться с службой поддержки"
            onClick={() => open("https://t.me/brokqwiks")}
          >
            {t("headerSupport")} ˃
          </Button>
        </li>
      </NavigationBar>
    </header>
  );
};
