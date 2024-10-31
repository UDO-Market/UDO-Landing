import styles from "./community.module.scss";
import { useMyTranslate } from "../../../app/translationText/useMyTranslate";
import { Button } from "../../../shared/ui/button";
import { CommunityCard } from "../../../shared/ui/communityCard/communityCard";
import { handleTG } from "../../../features/handleTG/handleTG";
import user_icon from "/svg/icon_community.svg";
import telegram_icon from "/svg/icon_telegram.svg";
import github_icon from "/svg/icon_gitHub.svg";
import twitter_icon from "/svg/icon_twitter.svg";
import question_icon from "/svg/question.svg";

export const Community = () => {
  
  const { t } = useMyTranslate();

  return (
    <section className={styles.communitySection}>
      <div className={styles.communityHeader}>
        <h3>{t("sectionCommunityTitle")}</h3>
        <img
          src={user_icon}
          alt="user_icon"
          className={styles.userIcon}
        />
      </div>
      <div className={styles.communityCards}>
        <CommunityCard
          icon={telegram_icon}
          name={"Telegram"}
          descr={t("sectionCardTGDesc")}
          aboutBtn={t("sectionCardButtonSubscribe")}
          url="https://t.me/udo_ton"
        />
        <CommunityCard
          icon={github_icon}
          name={"GitHub"}
          descr={t("sectionCardGitHubDesc")}
          aboutBtn={t("sectionCardButtonLearnCode")}
          url="https://github.com/brokqwiks/UDO_"
        />
        <CommunityCard
          icon={twitter_icon}
          name={"Twitter"}
          descr={t("sectionCardTwitterDesc")}
          aboutBtn={t("sectionCardButtonSubscribe")}
          url="https://x.com/udomarket?s=21"
        />
      </div>
      {window.screen.width > 480 && (
        <Button title="Связаться с нами" textForScreenReaders="Связаться с нами" className={styles.contactButton} onClick={handleTG}>
          {t("sectionButtonContact")}
          <img src={question_icon} alt="question_icon" />
        </Button>
      )}
    </section>
  );
};
