import styles from "../ui/roadMap.module.scss";
import { Milestone } from "./milestone";
import { TQuarterSectionProps } from "./typesRoadMap";

export const QuarterSection = ({
  quarter,
  milestones,
}: TQuarterSectionProps) => (
  <div className={styles.quarterSection}>
    <h4>{quarter}</h4>

    <div className={styles.milestoneContainer}>
      {milestones.map(({ iconSrc, text, color }, index) => (
        <Milestone key={index} iconSrc={iconSrc} text={text} color={color} />
      ))}
    </div>
  </div>
);
