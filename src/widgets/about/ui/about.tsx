import styles from "./about.module.scss";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useAbout from "../model/useAbout";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { MButton } from "../../../shared/ui/button/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import rocket from "/svg/rocket.svg";

export const About = () => {
  const { t } = useMyTranslate();

  const { isWidth, gif_array } = useAbout();

  const {
    animateXMinus100,
    animateX50,
    animateY50,
    animateYMinus50,
    animateAppearance,
  } = useMyAnimated();

  return (
    <section className={styles.about}>
      <motion.div
        className={styles.aboutContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className={styles.aboutHeader}>
          <motion.div
            custom={1}
            variants={animateXMinus100}
            className={styles.containerHeader}
          >
            <h2 className={styles.aboutText}>{t("sectionAboutTitle")}</h2>
            <h2>UDO</h2>
          </motion.div>
          <motion.p custom={2} variants={animateXMinus100}>
            {t("sectionAboutDescription")}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className={
            isWidth > 769
              ? styles.aboutButtons
              : styles.aboutButtonsMobileAdaptiv
          }
        >
          <MButton
            custom={1}
            variants={isWidth > 770 ? animateY50 : animateYMinus50}
            title=""
            textForScreenReaders=""
            className={styles.buttoRocket}
          >
            {t("sectionAboutButtonFast")} <img src={rocket} alt="rocket" />
          </MButton>
          <MButton
            custom={3}
            variants={isWidth > 770 ? animateY50 : animateAppearance}
            title=""
            textForScreenReaders=""
          >
            {t("sectionAboutButtonSafe")}
          </MButton>
          <MButton
            custom={4}
            variants={isWidth > 770 ? animateY50 : animateAppearance}
            title="Перейти к службе поддержки"
            textForScreenReaders="Перейти к службе поддержки"
            onClick={handleTG}
          >
            {t("sectionAboutButtonSupport")}
          </MButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        custom={4}
        variants={animateX50}
        className={styles.gifBlock}
      >
        <video
          autoPlay
          muted
          loop
          src={gif_array[Math.floor(Math.random() * gif_array.length)]}
        />
      </motion.div>
    </section>
  );
};
