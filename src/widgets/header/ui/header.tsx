import styles from "./header.module.scss";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useHeaderLogic from "../model/useHeaderLogic";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { NavigationHeader } from "../../../shared/ui/navigationHeader";
import { NavigationBarItem } from "../../../shared/ui/navigationBarItem";
import { MNavigationBar } from "../../../shared/ui/navigationBar";
import { Logo } from "../../../shared/ui/logo";

export const Header = () => {
  
  const { t, i18n, changeLanguages } = useMyTranslate();
  const { isDesktop, navBar, setNavBar, scrollHeader } = useHeaderLogic();

  const { animateYMinus50 } = useMyAnimated()

  return (
    <header className={styles.header}>
      <motion.div
        initial={isDesktop && animateYMinus50.hidden}
        whileInView={
          isDesktop ? animateYMinus50.visible : "none"
        }
        viewport={{ amount: 0.2 }}
        className={styles.container}
      >
        <Logo />
        <NavigationHeader
          i18n={i18n}
          t={t}
          navBar={navBar}
          changeLanguages={changeLanguages}
          setNavBar={setNavBar}
          scrollHeader={scrollHeader}
        />
      </motion.div>

      <MNavigationBar
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        isOpen={navBar}
        className={styles.navigationBar}
      >
        <NavigationBarItem scrollHeader={scrollHeader} t={t} />
      </MNavigationBar>
    </header>
  );
};
