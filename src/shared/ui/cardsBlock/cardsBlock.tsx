import "swiper/css";
import "swiper/scss/navigation";
import styles from "./cardsBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useCardsBlock from "../../lib/useCardsBlock";
import { motion } from "framer-motion";

export const CardsBlock = () => {
  const { isLaptop, images } = useCardsBlock();
  const imgTonBlock = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <div className={styles.cardsBlock}>
      {isLaptop ? (
        <motion.div
          initial={imgTonBlock.hidden}
          whileInView={imgTonBlock.visible(2)}
          viewport={{ amount: 0.2 }}
          className={styles.cardsBlockForDesctopAdaptiv}
        >
          {images.map(({ id, src, alt }) => (
            <img key={id} src={src} alt={alt} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 50,opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{ amount: 0.5 }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {images.map(({ id, src, alt }) => (
              <SwiperSlide key={id}>
                <img src={src} alt={alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </div>
  );
};
