import styles from "../ui/roadMap.module.scss";
import { TMilestoneProps } from "./typesRoadMap";

export const Milestone = ({ iconSrc, text, color }: TMilestoneProps) => (
  <div className={styles.milestone} style={{backgroundColor: color}}>

    {iconSrc && <img src={iconSrc} alt="Roadmap icon" className={styles.milestoneIcon}/>}

    <div>{text}</div>

  </div>
);
