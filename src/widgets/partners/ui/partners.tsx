import styles from "./partners.module.scss";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import usePartners from "../model/usePartners";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { Modal } from "../../../shared/ui/modal/modal";
import { MButton } from "../../../shared/ui/button/button";
import { Cross } from "../../../shared/ui/cross/cross";
import duck_7 from "/duck/duck7.webm";
import icon_partners from "/svg/icon_partners.svg";
import icon_tg from "/svg/icon_telegram.svg";
import add_new_partners from "/icons/add_new_partners.webp";

export const Partners = () => {
  const { t } = useMyTranslate();

  const {
    modal,
    setModal,
    partnersData,
    handleModalToggle,
    handleSupportClick,
  } = usePartners();

  const { animateAppearance, animateY50 } = useMyAnimated();

  return (
    <section className={styles.partnersContainer}>
      <motion.div
        initial={animateAppearance.hidden}
        whileInView={animateAppearance.visible(1)}
        viewport={{ amount: 0.2 }}
        className={styles.partnersHeading}
      >
        <h3>{t("sectionOurPartners")}</h3>
        <img src={icon_partners} alt="Our partners" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        className={styles.allPartners}
      >
        {partnersData.map(({ id, href, src, alt }) => (
          <motion.a
            custom={id}
            variants={animateY50}
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={src} alt={alt} />
          </motion.a>
        ))}

        <MButton
          custom={3}
          variants={animateY50}
          title="Станьте нашим партнёром!"
          textForScreenReaders="Станьте нашим партнёром"
          onClick={handleModalToggle}
        >
          <img src={add_new_partners} alt="Add new partners" />
        </MButton>
      </motion.div>

      <Modal isOpen={modal} className={styles.modalContentPartners}>
        <span>
          <Cross setCross={setModal} />
        </span>
        <video
          autoPlay
          muted
          loop
          playsInline
          src={duck_7}
          className={styles.gif7Dugs}
        />
        <MButton
          title="Связаться с службой поддержки"
          textForScreenReaders="Связаться с службой поддержки"
          onClick={handleSupportClick}
        >
          <img src={icon_tg} alt="Telegram" />
          Telegram
        </MButton>
        <p>{t("sectionModalOurPartners")}</p>
      </Modal>
    </section>
  );
};
