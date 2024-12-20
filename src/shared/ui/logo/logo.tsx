import useHeaderLogic from "../../../widgets/header/model/useHeaderLogic";
import { MButton } from "../button/button";
import styles from "./logo.module.scss";
import logo_udo from "/logo/logo_udo.svg";

export const Logo = () => {
  const { scrollHeader } = useHeaderLogic();

  return (
    <MButton
      title="Вернуться в самое начало"
      textForScreenReaders="Вернуться в самое начало"
      className={styles.logo}
      onClick={() => scrollHeader(0)}
    >
      <img src={logo_udo} alt="logo_udo" />
    </MButton>
  );
};
