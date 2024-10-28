import { TButton } from "./TButton";
export type TLearnButton = {
    onClick: () => void;
    imgSrc: string;
    title: string,
    textForScreenReaders: string,
    text: string;
  } & Pick<TButton, "refButton">