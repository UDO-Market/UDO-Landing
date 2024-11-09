import useMyTranslate from "../../../app/translationText/useMyTranslate";
import { MButton } from "../button/button";
import { ButtonLang } from "../buttonLang/buttonLang";
import { Cross } from "../cross/cross";
import { TNavigationHeader } from "../../types/TNavigationHeader";
import icon_bars from "/svg/icon_bars.svg";
import styles from "../../../shared/ui/navigationHeader/navigation.module.scss";

type TRenderButtonMobile = {} & Pick<TNavigationHeader, "navBar" | "setNavBar">;

export const RendersButtonMobile = ({
  navBar,
  setNavBar,
}: TRenderButtonMobile) => {
  
  const { i18n, changeLanguages } = useMyTranslate();

  return (
    <>
      <li className={styles.buttonAdaptiveLang}>
        <ButtonLang
          currentLang={i18n.language}
          changeLanguages={changeLanguages}
        />
      </li>
      <li>
        <MButton
          title="Навигационная панель"
          textForScreenReaders="Навигационная панель"
          onClick={() => setNavBar(!navBar)}
        >
          {navBar ? (
            <Cross setCross={setNavBar} />
          ) : (
            <img src={icon_bars} alt="Иконка навигационной панели" />
          )}
        </MButton>
      </li>
    </>
  );
};
