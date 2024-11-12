import useHeaderLogic from "../../../widgets/header/model/useHeaderLogic";
import { TNavigationBarItem } from "../../types/TNavigationBarItem";
import { MButton } from "../button/button";

export const NavigationBarItem = ({scrollHeader, t}: TNavigationBarItem) => {

    const {buttonParamScroll} = useHeaderLogic()
    
    return (
      <>
        {buttonParamScroll.map(({id, scrollingTo, titleKey, onClick}) => (
          <li key={id}>
            <MButton 
              title={`Перейти к блоку ${t(titleKey)}`}
              textForScreenReaders={`Перейти к блоку ${t(titleKey)}`}
              onClick={() => onClick ? onClick() : scrollHeader(scrollingTo)}
            >
              {t(titleKey)} {">"}
            </MButton>
          </li>
        ))}
      </>
    );
  }