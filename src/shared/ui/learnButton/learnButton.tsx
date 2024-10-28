import styles from "./learnButtom.module.scss";
import { TLearnButton } from "../../types/TLearnButton";

export const LearnButton = ({
  onClick,
  imgSrc,
  text,
  refButton,
  textForScreenReaders,
  title,
}: TLearnButton) => {
  return (
    <button
      title={title}
      className={styles.learnButton}
      onClick={onClick}
      ref={refButton}
    >
      <span
        style={{
          display: "none",
        }}
      >
        {textForScreenReaders}
      </span>
      <img src={imgSrc} alt={text} />
      {text}
    </button>
  );
};
