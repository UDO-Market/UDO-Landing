import { MouseEventHandler, ReactNode} from "react";

export type TButton  = {
    children: ReactNode,
    onClick?: () => void,
    className?: string | undefined,
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>,
    title: string,
    textForScreenReaders: string,
}