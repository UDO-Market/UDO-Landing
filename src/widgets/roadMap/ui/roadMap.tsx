import styles from "./roadMap.module.scss";
import useRoadMap from "../model/useRoadMap";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { quarters } from "../model/quarters";
import { QuarterSection } from "../model/quarterSection";
import icon_roadMap from "/icons/icon_roadMap.webp";

export const RoadMap = () => {
  const { t } = useMyTranslate();

  const { sizeRodmap } = useRoadMap();

  const { animateXMinus100, animateYMinus100 } = useMyAnimated();
  
  return (
    <section className={styles.roadMapSection}>
      <motion.div
        initial={animateXMinus100.hidden}
        whileInView={animateXMinus100.visible(1)}
        viewport={{ amount: 0.2 }}
        className={styles.titleContainer}
      >
        <h3>{t("sectionRoadMap")}</h3>
        <img src={icon_roadMap} alt="Road Map" />
      </motion.div>
      
      <motion.div
        initial={animateYMinus100.hidden}
        whileInView={animateYMinus100.visible(2)}
        viewport={{ amount: 0.2 }}
        className={styles.timelineContainer}
      >
        <img
          src={sizeRodmap()}
          alt="roadMap_line"
          className={styles.timelineIcon}
        />
        <div className={styles.timelineContent}>
          {quarters.map((quarter) => (
            <QuarterSection
              key={quarter.id}
              quarter={quarter.quarter}
              milestones={quarter.milestones}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
