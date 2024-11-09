import { ReactNode} from "react";

export type TButton  = {
    children: ReactNode,
    onClick?: () => void,
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string | undefined,
    title: string,
    textForScreenReaders: string,
}