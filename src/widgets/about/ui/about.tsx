import styles from "./about.module.scss";
import { useMemo, useState } from "react";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useAbout from "../model/useAbout";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { MButton } from "../../../shared/ui/button/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import rocket from "/svg/rocket.svg";
import rocket_blue from "/svg/rocket_blue.svg";

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

  const [isHovered, setIsHovered] = useState(true);


  const randomVideo = useMemo(() => {
    return gif_array[Math.floor(Math.random() * gif_array.length)]
  }, [])

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
            isWidth ? styles.aboutButtons : styles.aboutButtonsMobileAdaptiv
          }
        >
          <MButton
            custom={1}
            variants={isWidth ? animateY50 : animateYMinus50}
            title=""
            textForScreenReaders=""
            className={styles.buttoRocket}
            whileHover={{
              transition: { duration: 0.4 },
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
          >
            {t("sectionAboutButtonFast")}
            <img
              src={
                window.screen.width > 1025
                  ? isHovered
                    ? rocket
                    : rocket_blue
                  : rocket
              }
              alt="rocket"
            />
          </MButton>
          <MButton
            custom={2}
            variants={isWidth ? animateY50 : animateAppearance}
            whileHover={{
              backgroundColor: "#00A3FF",
              color: "#fff",
              transition: { duration: 0.4 },
            }}
            title=""
            textForScreenReaders=""
          >
            {t("sectionAboutButtonSafe")}
          </MButton>
          <MButton
            custom={3}
            variants={isWidth ? animateY50 : animateAppearance}
            whileHover={{
              backgroundColor: "#00A3FF",
              color: "#fff",
              transition: { duration: 0.4 },
            }}
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
          playsInline
          src={randomVideo}
        />
      </motion.div>
    </section>
  );
};
