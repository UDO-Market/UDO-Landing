import styles from "./modal.module.scss";
import { TModal } from "../../types/TModal";
import { motion } from "framer-motion";
import useMyAnimated from "../../../app/animated/useMyAnimated";

export const Modal = ({ children, isOpen, className }: TModal) => {
  const { animateYMinus100 } = useMyAnimated();

  return (
    <div
      className={styles.modal}
      style={{
        display: isOpen ? "block" : "none",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition: "0.4s ease-in-out",
      }}
    >
      <motion.div
        initial={animateYMinus100.hidden}
        whileInView={animateYMinus100.visible(0)}
        viewport={{ amount: 0.2 }}
        className={styles.modalWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={className}>{children}</div>
      </motion.div>
    </div>
  );
};
