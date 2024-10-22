import { useState } from "react";
import styles from "./communityCard.module.scss";
import { TCommunityCard } from "../../types/TCommunityCard";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";

export const CommunityCard = ({
  icon,
  name,
  descr,
  url,
  aboutBtn,
}: TCommunityCard) => {
  const [hover, setHover] = useState(false);
  const { i18n } = useMyTranslate();

  const widthParagraf = () => {
    if(window.screen.width < 480){
      return i18n.language == 'en' ? '255px' : '336px'
    }else if(window.screen.width < 769){
      return i18n.language == 'en' ? '60%' : '60%' 
    }else if(window.screen.width < 1025){
      return i18n.language == 'en' ? '120px' : '170px'
    }
  }
  
  return (
    <article
      className={styles.cardMain}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={icon} alt="" />

      <h1>{name}</h1>

      <p style={{ width: widthParagraf() }}>  
        {descr}
      </p>

      <a href={url} target="_blank" id="123" rel="noopener noreferrer">
        {aboutBtn}
        <span
          style={{
            display: "inline-block",
            transform:
              window.screen.width > 1025
                ? hover
                  ? "translateX(20px)"
                  : "translateX(0)"
                : hover
                ? "translateX(7px)"
                : "translateX(0)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {" >"}
        </span>
      </a>
    </article>
  );
};

