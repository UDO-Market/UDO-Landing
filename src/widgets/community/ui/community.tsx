import styles from "./community.module.scss";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useCommunity from "../model/useCommunity";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { MButton } from "../../../shared/ui/button/button";
import { MCommunityCard } from "../../../shared/ui/communityCard/communityCard";
import { handleTG } from "../../../features/handleTG/handleTG";
import user_icon from "/svg/icon_community.svg";
import question_icon from "/svg/question.svg";

export const Community = () => {
  const { t } = useMyTranslate();

  const { isTablet, isMobile, communityData } = useCommunity();

  const { animateYMinus50, animateYMinus100, animateAppearance } =
    useMyAnimated();
  return (
    <section className={styles.communitySection}>
      <motion.div
        initial={animateYMinus50.hidden}
        whileInView={animateYMinus50.visible}
        viewport={{ amount: 0.2 }}
        className={styles.communityHeader}
     
      >
        <h3>{t("sectionCommunityTitle")}</h3>
        <img src={user_icon} alt="user_icon" className={styles.userIcon} />
      </motion.div>

      <motion.div
        className={styles.communityCards}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {communityData.map((item) => (
          <MCommunityCard
            custom={item.id}
            variants={isTablet ? animateYMinus100 : animateAppearance}
            key={item.id}
            {...item}
          />
        ))}
      </motion.div>
      {isMobile && (
        <MButton
          initial={animateAppearance.hidden}
          whileInView={animateAppearance.visible(1)}
          whileHover={{scale: 1.03, transition: { duration: 0.5 }}}
          viewport={{ amount: 0.2 }}
          title="Связаться с нами"
          textForScreenReaders="Связаться с нами"
          className={styles.contactButton}
          onClick={handleTG}
        >
          {t("sectionButtonContact")}
          <img src={question_icon} alt="question_icon" />
        </MButton>
      )}
    </section>
  );
};
