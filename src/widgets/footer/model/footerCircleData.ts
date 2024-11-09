import twitter_footer from "/svg/twitter_icon_bg.svg";
import telegram_footer from "/svg/telegram_icon_bg.svg";
import github_footer from "/svg/github_icon_bg.svg";
import styles from '../ui/footer.module.scss'

export const footerCircleData = [
    {
      id: 1,
      href:"https://t.me/udo_ton",
      imgSrc:telegram_footer,
      alt:"telegram_footer"
    },
    {
      id: 2,
      href:"https://github.com/brokqwiks/UDO_",
      imgSrc:github_footer,
      alt:"github_footer"
    },
    {
      id: 3,
      className:styles.twitterIcon,
      href:"https://x.com/udomarket?s=21",
      imgSrc:twitter_footer,
      alt:"twitter_footer"
    }
  ]