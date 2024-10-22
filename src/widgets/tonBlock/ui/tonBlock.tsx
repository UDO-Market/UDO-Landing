import styles from "./tonBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button/button";
import telegram_wallet_img from "/icons/telegram_wallet_block.png";
import tonkeeper_wallet_img from "/icons/tonkeeper_wallet_block.png";
import tonconnect_img from "/icons/tonconnect_block.png";
import toncoin_icon3 from "/svg/toncoin3.svg";
import toncoin from "/icons/icon_ton.png";

export const TonBlock = () => {
  
  const { t } = useMyTranslate();

  return (
    <section className={styles.tonBlock}>
      <div className={styles.headerBlock}>
        <h2>
          {t("sectionTonWalletTitle1Word")}
          <span> {t("sectionTonWalletTitle2Word")}</span>
        </h2>
        <img src={toncoin} alt="toncoin" />
      </div>
      <div className={styles.cardsBlock}>
        {window.screen.width > 481 ? (
          <>
            <img
              src={telegram_wallet_img}
              alt="telegram_wallet_img"
            />
            <img
              src={tonkeeper_wallet_img}
              alt="tonkeeper_wallet_img"
            />
            <img 
              src={tonconnect_img} 
              alt="tonconnect_img" 
            />
          </>
        ) : (
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src={telegram_wallet_img}
                alt="telegram_wallet_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={tonkeeper_wallet_img}
                alt="tonkeeper_wallet_img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src={tonconnect_img} 
                alt="tonconnect_img" 
              />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
      <div className={styles.descriptionBlock}>
        <p>
          <span>TON Connect</span> {t("sectionTonWalleDesc")}
        </p>
      </div>
      <Button onClick={() => open('https://ton.tg/ru/wallets')}>
        {t("sectionTonWalletButton")}
        <img src={toncoin_icon3} alt="toncoin_icon3" />
      </Button>
    </section>
  );
};
