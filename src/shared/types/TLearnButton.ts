import { LegacyRef} from "react";

export type TLearnButton = {
    onClick: () => void,
    imgSrc: string,
    imgAlt: string,
    title: string,
    textForScreenReaders: string,
    text: string,
    refButton?: LegacyRef<HTMLButtonElement>
  }