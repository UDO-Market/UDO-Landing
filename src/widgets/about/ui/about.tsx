import styles from "./about.module.scss";
import { Button } from "../../../shared/ui/button/button";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import duck1 from "/gif/duck1.gif";
import duck2 from "/gif/duck2.gif";
import duck3 from "/gif/duck3.gif";
import duck4 from "/gif/duck4.gif";
import duck5 from "/gif/duck5.gif";
import rocket from "/svg/rocket.svg";

export const About = () => {
  
  const {t} = useMyTranslate()

  const gif_array = [duck1, duck2, duck3, duck4, duck5];
  
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <div className={styles.containerHeader}>
            <h2 className={styles.aboutText}>{t('sectionAboutTitle')}</h2>
            <h2>UDO</h2>
          </div>
          <p>
           {t('sectionAboutDescription')}
          </p>
        </div>
        <div className={window.screen.width > 769 ? styles.aboutButtons : styles.aboutButtonsMobileAdaptiv}>
          <Button title="" textForScreenReaders="" className={styles.buttoRocket}>{t('sectionAboutButtonFast')} <img src={rocket} alt="rocket" /></Button>
          <Button title="" textForScreenReaders="">{t('sectionAboutButtonSafe')}</Button>
          <Button title="Перейти к службе поддержки" textForScreenReaders="Перейти к службе поддержки" onClick={() => open('https://t.me/brokqwiks')}>{t('sectionAboutButtonSupport')}</Button>
        </div>
      </div>
      {window.screen.width > 424 && (
        <div className={styles.gifBlock}>
        <img
          src={gif_array[Math.floor(Math.random() * gif_array.length)]}
          alt="gif_dugs"
        />
      </div>
      )}
      
    </section>
  );
};
