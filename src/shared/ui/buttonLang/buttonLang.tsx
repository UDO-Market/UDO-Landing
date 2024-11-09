import { MButton } from "../button/button";
import { TButtonLang } from "../../types/TButtonLang";
import icons_language from "/svg/icon_language.svg";
import styles from './buttonLang.module.scss'
export const ButtonLang = ({
  currentLang,
  changeLanguages,
}: TButtonLang) => (

  <MButton
  className={styles.buttonLang}
    title={`Выбрать ${currentLang === "ru" ? "английский" : "русский"} язык`}
    textForScreenReaders={`Выбрать ${
      currentLang === "ru" ? "английский" : "русский"
    } язык`}
    onClick={() => changeLanguages(currentLang === "ru" ? "en" : "ru")}
  >
    <img src={icons_language} alt="Иконка смены языка" />
    {currentLang === "ru" ? "Eng" : "Ru"}
  
  </MButton>
);
