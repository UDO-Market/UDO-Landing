import styles from "./partners.module.scss";
import { useModal } from "../../../shared/ui/modal/useModal";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Modal } from "../../../shared/ui/modal/modal";
import { Button } from "../../../shared/ui/button";
import { handleTG } from "../../../features/handleTG/handleTG";
import duck_7 from "/duck/duck7.webm";
import icon_partners from "/svg/icon_partners.svg";
import icon_tg from "/svg/icon_telegram.svg";
import ton_nest_lvl2 from "/icons/ton_nest_lvl2.webp";
import add_new_partners from "/icons/add_new_partners.webp";
import move_partner from "/icons/move_partner.webp";
import { Cross } from "../../../shared/ui/cross/cross";

export const Partners = () => {
  const { modal, setModal } = useModal();
  const { t } = useMyTranslate();

  return (
    <section className={styles.partnersContainer}>
      <div className={styles.partnersHeading}>
        <h3>{t("sectionOurPartners")}</h3>
        <img src={icon_partners} alt="Наши партнёры" />
      </div>

      <div className={styles.allPartners}>
        <a
          href="https://eco.ton.org/en/opportunities/ton-nest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ton_nest_lvl2} alt="ton_nest" />
        </a>
        <a
          href="https://t.me/moveonton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={move_partner} alt="move_partner" />
        </a>
        <Button
          title="Станьте нашим партнёром!"
          textForScreenReaders="Станьте нашим партнёром"
          onClick={() => setModal(!modal)}
        >
          <img src={add_new_partners} alt="add_new_partners" />
        </Button>
      </div>

      <Modal isOpen={modal} className={styles.modalContentPartners}>
        <span>
          <Cross setCross={setModal} />
        </span>
        <video autoPlay muted loop src={duck_7} className={styles.gif7Dugs} />
        <Button
          title="Связаться с службой поддержки"
          textForScreenReaders="Связаться с службой поддержки"
          onClick={() => {
            handleTG();
            setModal(false);
          }}
        >
          <img src={icon_tg} alt="telegram" />
          Telegram
        </Button>
        <p>{t("sectionModalOurPartners")}</p>
      </Modal>
    </section>
  );
};
