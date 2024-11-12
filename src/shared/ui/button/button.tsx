import { motion } from "framer-motion";
import { TButton } from "../../types/TButton";
import { forwardRef, LegacyRef } from "react";

const Button = forwardRef(
  ({
    children,
    onClick,
    className,
    title,
    textForScreenReaders,
    onMouseEnter,
    onMouseLeave
  }: TButton, refButton: LegacyRef<HTMLButtonElement>) => {
    return (
      <button
        ref={refButton}
        onClick={onClick}
        className={className}
        title={title}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span style={{ display: "none" }}>{textForScreenReaders}</span>
        {children}
      </button>
    );
  }
);
export const MButton = motion.create(Button)
