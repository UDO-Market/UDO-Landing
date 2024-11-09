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
  }: TButton, refButton: LegacyRef<HTMLButtonElement>) => {
    return (
      <button
        ref={refButton}
        onClick={onClick}
        className={className}
        title={title}
      >
        <span style={{ display: "none" }}>{textForScreenReaders}</span>
        {children}
      </button>
    );
  }
);
export const MButton = motion.create(Button)
