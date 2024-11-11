import styles from "./tonBlock.module.scss";
import useMyTranslate from "../../../app/translationText/useMyTranslate";
import useMyAnimated from "../../../app/animated/useMyAnimated";
import { motion } from "framer-motion";
import { MButton } from "../../../shared/ui/button/button";
import { CardsBlock } from "../../../shared/ui/cardsBlock";
import toncoin_icon3 from "/svg/toncoin3.svg";
import toncoin from "/svg/icon_toncoin.svg";

export const TonBlock = () => {
  const { t } = useMyTranslate();
  const {animateXMinus100} = useMyAnimated()
 
  return (
    <section className={styles.tonBlock}>
      <motion.div 
      initial={animateXMinus100.hidden}
      whileInView={animateXMinus100.visible(1)}
      viewport={{ amount: 0.2 }}
      className={styles.headerBlock}>
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
      className={styles.descriptionBlock}>
        <p>
          <span>TON Connect</span> {t("sectionTonWalleDesc")}
        </p>
      </motion.div>

      <MButton
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{ amount: 0.2 }}
        title="Установить кошелёк"
        textForScreenReaders="Установить кошелёк"
        onClick={() => open("https://ton.tg/ru/wallets")}
      >
        {t("sectionTonWalletButton")}
        <img src={toncoin_icon3} alt="toncoin_icon3" />
      </MButton>
    </section>
  );
};
