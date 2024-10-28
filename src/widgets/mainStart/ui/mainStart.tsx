import styles from "./mainStart.module.scss";
import { useMyStart } from "../model/useMyStart";
import { useModal } from "../../../shared/ui/modal/useModal";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Modal } from "../../../shared/ui/modal/modal";
import { Button } from "../../../shared/ui/button/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import gif_6 from "/gif/duck6.gif";
import icons_tg from "/icons/icon_tg.png";
import { Cross } from "../../../shared/ui/cross/cross";

export const MainStart = () => {
  const { displayedText } = useMyStart();
  const { modal, setModal } = useModal();
  const { t } = useMyTranslate();

  return (
    <main className={styles.mainSection}>
      <div className={styles.mainContent}>
        <div className={styles.logoUdoContainer}>
          <h1>{displayedText}</h1>
        </div>
        <h1 className={styles.highlight}>Market-Place</h1>
        <p>{t("mainDescription")}</p>
        <Button
          title=""
          textForScreenReaders=""
          onClick={() => {
            setModal(!modal);
          }}
        >
          {t("mainDescriptionButton")}
        </Button>
      </div>

      <Modal isOpen={modal} className={styles.modalContent}>
        <span>
          <Cross setCross={setModal} />
        </span>
        <img src={gif_6} alt="gifDucks6" className={styles.gif6Dugs} />
        <p>{t("mainModalDescription")}</p>
        <Button
          title="Связаться с службой поддержки"
          textForScreenReaders="Связаться с службой поддержки"
          onClick={() => {
            handleTG();
            setModal(false);
          }}
        >
          <img src={icons_tg} alt="telegram" /> Telegram
        </Button>
      </Modal>
    </main>
  );
};
