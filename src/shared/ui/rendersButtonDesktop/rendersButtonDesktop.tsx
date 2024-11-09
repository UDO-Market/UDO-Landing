import { TNavigationHeader } from "../../types/TNavigationHeader";
import { MButton } from "../button/button";
import useHeaderLogic from "../../../widgets/header/model/useHeaderLogic";

type TRenderButtonDesktop = {} & Pick<TNavigationHeader, "t" | "scrollHeader">;

export const RendersButtonDesktop = ({
  t,
  scrollHeader,
}: TRenderButtonDesktop) => {
  
  const { buttonParamScroll } = useHeaderLogic();

  return buttonParamScroll.map(({ id, titleKey, scrollingTo, onClick }) => (
    <li key={id}>
      <MButton
        title={`Перейти к блоку ${t(titleKey)}`}
        textForScreenReaders={`Перейти к блоку ${t(titleKey)}`}
        onClick={onClick || (() => scrollHeader(scrollingTo))}
      >
        {t(titleKey)}
      </MButton>
    </li>
  ));
};
