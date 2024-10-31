import "swiper/css";
import "swiper/scss/navigation";
import styles from "./cardsBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import telegram_wallet_img from "/icons/telegram_wallet_block.webp";
import tonkeeper_wallet_img from "/icons/tonkeeper_wallet_block.webp";
import tonconnect_img from "/icons/tonconnect_block.webp";

export const CardsBlock = () => {
  return (
    <div className={styles.cardsBlock}>
      {window.screen.width > 1025 ? (
        <div className={styles.cardsBlockForDesctopAdaptiv}>
          <img src={telegram_wallet_img} alt="telegram_wallet_img" />
          <img src={tonkeeper_wallet_img} alt="tonkeeper_wallet_img" />
          <img src={tonconnect_img} alt="tonconnect_img" />
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <img src={telegram_wallet_img} alt="telegram_wallet_img" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={tonkeeper_wallet_img} alt="tonkeeper_wallet_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tonconnect_img} alt="tonconnect_img" />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};
