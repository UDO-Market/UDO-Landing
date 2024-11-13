import styles from "./tonBlock.module.scss";
import { useState } from "react";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { MButton } from "../../../shared/ui/button/button";
import { CardsBlock } from "../../../shared/ui/cardsBlock";
import toncoin_icon3 from "/svg/toncoin3.svg";
import toncoin_icon3_blue from "/svg/toncoin3_blue.svg";
import toncoin from "/icons/icon_toncoin.webp";

export const TonBlock = () => {
  const { t } = useMyTranslate();
  const { animateXMinus100, animateAppearance } = useMyAnimated();
  const [isHovered, setIsHovered] = useState(true);
  return (
    <section className={styles.tonBlock}>
      <motion.div
        initial={animateXMinus100.hidden}
        whileInView={animateXMinus100.visible(1)}
        viewport={{ amount: 0.2 }}
        className={styles.headerBlock}
      >
        <h2>
          {t("sectionTonWalletTitle1Word")}
          <span> {t("sectionTonWalletTitle2Word")}</span>
        </h2>
        <img src={toncoin} alt="toncoin" />
      </motion.div>

      <CardsBlock />

      <motion.div
        initial={animateXMinus100.hidden}
        whileInView={animateXMinus100.visible(1)}
        viewport={{ amount: 0.2 }}
        className={styles.descriptionBlock}
      >
        <p>
          <span>TON Connect</span> {t("sectionTonWalleDesc")}
        </p>
      </motion.div>

      <MButton
        initial={animateAppearance.hidden}
        whileInView={animateAppearance.visible(2)}
        whileHover={{
          boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.2)",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(0, 0, 0)",
          transition: { duration: 0.5 },
        }}
        viewport={{ amount: 0.5 }}
        title="Установить кошелёк"
        textForScreenReaders="Установить кошелёк"
        onClick={() => open("https://ton.tg/ru/wallets")}
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(true)}
      >
        {t("sectionTonWalletButton")}
        <img
          src={
            window.screen.width > 1025
              ? isHovered
                ? toncoin_icon3
                : toncoin_icon3_blue
              : toncoin_icon3
          }
          alt="Brilliant icon"
        />
      </MButton>
    </section>
  );
};
