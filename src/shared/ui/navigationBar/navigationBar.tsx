import { forwardRef, LegacyRef } from "react";
import { TNavigationBar } from "../../types/TNavigationBar";
import { motion } from "framer-motion";

const NavigationBar = forwardRef(
  (
    { className, children, isOpen }: TNavigationBar,
    ref: LegacyRef<HTMLElement>
  ) => {
    return (
      <nav
        ref={ref}
        className={className}
        style={{
          display: isOpen ? "block" : "none",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {children}
      </nav>
    );
  }
);

export const MNavigationBar = motion.create(NavigationBar);
