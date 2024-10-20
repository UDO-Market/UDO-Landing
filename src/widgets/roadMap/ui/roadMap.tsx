import styles from "./roadMap.module.scss";
import { quarters } from "../model/quarters";
import { QuarterSection } from "../model/quarterSection";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import roadMap_line from '/icons/roadMap_line.png'
import roadMap_line_mobile from '/icons/roadMap_line_mobile.png'
import roadMap_line_tablet from '/icons/roadMap_line_tablet.png'
import clip_path from '/icons/clip_path.png'


export const RoadMap = () => {
  
  const {t} = useMyTranslate()

  const sizeRodmap = () => {
    if(window.window.screen.width < 485){
      return roadMap_line_mobile
    }else if(window.window.screen.width < 1025){
      return roadMap_line_tablet
    }else{
      return roadMap_line
    }
  }
  return (
    <section className={styles.roadMapSection}>
      <div className={styles.titleContainer}>
        <h3>{t('sectionRoadMap')}</h3>
        <img
            src={clip_path}
            alt="Road Map"
        />
      </div>
      <div className={styles.timelineContainer}>
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
      </div>
    </section>
  );
};
