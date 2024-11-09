import styles from "./mainStart.module.scss";
import useMyStart from "../model/useMyStart";
import useModal from "../../../shared/ui/modal/useModal";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { Modal } from "../../../shared/ui/modal/modal";
import { MButton } from "../../../shared/ui/button/button";
import { Cross } from "../../../shared/ui/cross/cross";
import duck_6 from "/duck/duck6.webm";
import icons_tg from "/svg/icon_telegram.svg";

export const MainStart = () => {
  const { animateXMinus50, animateX50 } = useMyAnimated();

  const { displayedText, handleSupportModal } = useMyStart();
  const { modal, setModal } = useModal();
  const { t } = useMyTranslate();

  return (
    <main className={styles.mainSection}>
      <div className={styles.mainContent}>
        <motion.div
          initial={animateXMinus50.hidden}
          whileInView={animateXMinus50.visible}
          viewport={{ amount: 0.2 }}
          className={styles.logoUdoContainer}
        >
          <h1>{displayedText}</h1>
        </motion.div>

        <motion.h2
          initial={animateX50.hidden}
          whileInView={animateX50.visible(1)}
          viewport={{ amount: 0.2 }}
          className={styles.highlight}
        >
          Market-Place
        </motion.h2>

        <p>{t("mainDescription")} </p>

        <MButton
          title=""
          textForScreenReaders=""
          onClick={() => setModal(!modal)}
        >
          {t("mainDescriptionButton")}
        </MButton>
      </div>

      <Modal isOpen={modal} className={styles.modalContent}>
        <span>
          <Cross setCross={setModal} />
        </span>
        <video autoPlay muted loop src={duck_6} className={styles.gif6Dugs} />
        <p>{t("mainModalDescription")}</p>
        <MButton
          title="Связаться с службой поддержки"
          textForScreenReaders="Связаться с службой поддержки"
          onClick={handleSupportModal}
        >
          <img src={icons_tg} alt="telegram" /> Telegram
        </MButton>
      </Modal>
    </main>
  );
};
