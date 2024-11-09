import styles from "./learn.module.scss";
import useLearnLogic from "../model/useLearnLogic";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { LearnButton } from "../../../shared/ui/learnButton";
import icon_learn from "/svg/icon_learn.svg";

export const Learn = () => {
  const { selectedDescription, t, i18n, isTablet, learnButtonData } =
    useLearnLogic();
    
  const { animateAppearance } = useMyAnimated();

  return (
    <section className={styles.learnContainer}>
      <motion.div
        initial={animateAppearance.hidden}
        whileInView={animateAppearance.visible(1)}
        viewport={{ amount: 0.2 }}
        className={styles.learnHeading}
      >
        <h3>{t("sectionLearnTitle")}</h3>
        <img src={icon_learn} alt="icon_learn" />
      </motion.div>

      <motion.p
        initial={animateAppearance.hidden}
        whileInView={animateAppearance.visible(2)}
        viewport={{ amount: 0.2 }}
        className={styles.learnProtectText}
      >
        {t("sectionLearnDescription")}
      </motion.p>

      <motion.aside
        initial={animateAppearance.hidden}
        whileInView={animateAppearance.visible(3)}
        viewport={{ amount: 0.2 }}
        className={styles.learnMainInfoAndImg}
      >
        <div
          className={
            isTablet >= 769
              ? styles.learnContent
              : styles.learnContentMobileAdaptiv
          }
        >
          <div className={styles.learnBtnsAndFAQ}>
            <div className={styles.learnBtnsContainer}>
              {learnButtonData.map((button) => (
                <LearnButton key={button.id} {...button} />
              ))}
            </div>

            {isTablet > 769 && (
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

          <div
            className={styles.learnInfo}
            style={{
              height:
                i18n.language == "ru" || isTablet > 480 ? "670px" : "607px",
            }}
          >
            <h4>{selectedDescription.title}</h4>
            <p>{selectedDescription.paragraf1}</p>
            <p>{selectedDescription.paragraf2}</p>
          </div>
        </div>

        <div className={styles.learnImg}>
          <img src={selectedDescription.imgDescription} alt="Img description" />
        </div>
      </motion.aside>
    </section>
  );
};
