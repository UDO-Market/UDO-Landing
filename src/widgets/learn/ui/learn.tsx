import styles from "./learn.module.scss";
import useLearnLogic from "../model/useLearnLogic";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { LearnButton } from "../../../shared/ui/learnButton";
import icon_learn from "/icons/icon_learn.webp";

export const Learn = () => {
  const { selectedDescription, t, isWidth, learnButtonData, learnInfoHeight } =
    useLearnLogic();

  const { animateAppearance } = useMyAnimated();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={styles.learnContainer}
    >
      <motion.div
        custom={1}
        variants={animateAppearance}
        className={styles.learnHeading}
      >
        <h3>{t("sectionLearnTitle")}</h3>
        <img src={icon_learn} alt="icon_learn" />
      </motion.div>

      <motion.p
        custom={2}
        variants={animateAppearance}
        className={styles.learnProtectText}
      >
        {t("sectionLearnDescription")}
      </motion.p>

      <motion.aside
        custom={3}
        variants={animateAppearance}
        className={styles.learnMainInfoAndImg}
      >
        <div
          className={
            isWidth ? styles.learnContent : styles.learnContentMobileAdaptiv
          }
        >
          <div className={styles.learnBtnsAndFAQ}>
            <div className={styles.learnBtnsContainer}>
              {learnButtonData.map((button) => (
                <LearnButton key={button.id} {...button} />
              ))}
            </div>

            {isWidth && (
              <p>
                {t("sectionLearnFAQ")} {""}
                <a
                  href="https://spicy-plot-110.notion.site/Smart-Contracts-11f9787787f180d9856acdee66c3a4f8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ
                </a>
              </p>
            )}
          </div>

          <div className={styles.learnInfo} style={{ height: learnInfoHeight }}>
            <h4>{selectedDescription.title}</h4>
            <p>{selectedDescription.paragraf1}</p>
            <p>{selectedDescription.paragraf2}</p>
          </div>
        </div>

        <div className={styles.learnImg}>
          <img src={selectedDescription.imgDescription} alt="Img description" />
        </div>
      </motion.aside>
    </motion.section>
  );
};
