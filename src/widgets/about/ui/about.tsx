import styles from "./about.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import duck_1 from "/duck/duck1.webm";
import duck_2 from "/duck/duck2.webm";
import duck_3 from "/duck/duck3.webm";
import duck_4 from "/duck/duck4.webm";
import duck_5 from "/duck/duck5.webm";
import rocket from "/svg/rocket.svg";

export const About = () => {
  const { t } = useMyTranslate();

  const gif_array = [duck_1, duck_2, duck_3, duck_4, duck_5];

  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <div className={styles.containerHeader}>
            <h2 className={styles.aboutText}>{t("sectionAboutTitle")}</h2>
            <h2>UDO</h2>
          </div>
          <p>{t("sectionAboutDescription")}</p>
        </div>
        <div
          className={
            window.screen.width > 769
              ? styles.aboutButtons
              : styles.aboutButtonsMobileAdaptiv
          }
        >
          <Button
            title=""
            textForScreenReaders=""
            className={styles.buttoRocket}
          >
            {t("sectionAboutButtonFast")} <img src={rocket} alt="rocket" />
          </Button>
          <Button title="" textForScreenReaders="">
            {t("sectionAboutButtonSafe")}
          </Button>
          <Button
            title="Перейти к службе поддержки"
            textForScreenReaders="Перейти к службе поддержки"
            onClick={handleTG}
          >
            {t("sectionAboutButtonSupport")}
          </Button>
        </div>
      </div>
      {window.screen.width > 424 && (
        <div className={styles.gifBlock}>
          <video autoPlay muted loop src={gif_array[Math.floor(Math.random() * gif_array.length)]}/>
        </div>
      )}
    </section>
  );
};
